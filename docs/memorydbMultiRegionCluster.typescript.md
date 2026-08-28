# `memorydbMultiRegionCluster` Submodule <a name="`memorydbMultiRegionCluster` Submodule" id="@cdktn/provider-awscc.memorydbMultiRegionCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbMultiRegionCluster <a name="MemorydbMultiRegionCluster" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster awscc_memorydb_multi_region_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

new memorydbMultiRegionCluster.MemorydbMultiRegionCluster(scope: Construct, id: string, config: MemorydbMultiRegionClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig">MemorydbMultiRegionClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig">MemorydbMultiRegionClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionClusterNameSuffix">resetMultiRegionClusterNameSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName">resetMultiRegionParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy">resetUpdateStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags"></a>

```typescript
public putTags(value: IResolvable | MemorydbMultiRegionClusterTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEngine` <a name="resetEngine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine"></a>

```typescript
public resetEngine(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetMultiRegionClusterNameSuffix` <a name="resetMultiRegionClusterNameSuffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionClusterNameSuffix"></a>

```typescript
public resetMultiRegionClusterNameSuffix(): void
```

##### `resetMultiRegionParameterGroupName` <a name="resetMultiRegionParameterGroupName" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName"></a>

```typescript
public resetMultiRegionParameterGroupName(): void
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards"></a>

```typescript
public resetNumShards(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled"></a>

```typescript
public resetTlsEnabled(): void
```

##### `resetUpdateStrategy` <a name="resetUpdateStrategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy"></a>

```typescript
public resetUpdateStrategy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MemorydbMultiRegionCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MemorydbMultiRegionCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MemorydbMultiRegionCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MemorydbMultiRegionCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MemorydbMultiRegionCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList">MemorydbMultiRegionClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput">engineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput">multiRegionClusterNameSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput">multiRegionParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput">numShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput">updateStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix">multiRegionClusterNameSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards">numShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy">updateStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiRegionClusterName`<sup>Required</sup> <a name="multiRegionClusterName" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName"></a>

```typescript
public readonly multiRegionClusterName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags"></a>

```typescript
public readonly tags: MemorydbMultiRegionClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList">MemorydbMultiRegionClusterTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput"></a>

```typescript
public readonly engineInput: string;
```

- *Type:* string

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `multiRegionClusterNameSuffixInput`<sup>Optional</sup> <a name="multiRegionClusterNameSuffixInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput"></a>

```typescript
public readonly multiRegionClusterNameSuffixInput: string;
```

- *Type:* string

---

##### `multiRegionParameterGroupNameInput`<sup>Optional</sup> <a name="multiRegionParameterGroupNameInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput"></a>

```typescript
public readonly multiRegionParameterGroupNameInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput"></a>

```typescript
public readonly numShardsInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MemorydbMultiRegionClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput"></a>

```typescript
public readonly tlsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `updateStrategyInput`<sup>Optional</sup> <a name="updateStrategyInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput"></a>

```typescript
public readonly updateStrategyInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `multiRegionClusterNameSuffix`<sup>Required</sup> <a name="multiRegionClusterNameSuffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix"></a>

```typescript
public readonly multiRegionClusterNameSuffix: string;
```

- *Type:* string

---

##### `multiRegionParameterGroupName`<sup>Required</sup> <a name="multiRegionParameterGroupName" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName"></a>

```typescript
public readonly multiRegionParameterGroupName: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `updateStrategy`<sup>Required</sup> <a name="updateStrategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy"></a>

```typescript
public readonly updateStrategy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbMultiRegionClusterConfig <a name="MemorydbMultiRegionClusterConfig" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.Initializer"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

const memorydbMultiRegionClusterConfig: memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType">nodeType</a></code> | <code>string</code> | The compute and memory capacity of the nodes in the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description">description</a></code> | <code>string</code> | Description of the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine">engine</a></code> | <code>string</code> | The engine type used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | The Redis engine version used by the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix">multiRegionClusterNameSuffix</a></code> | <code>string</code> | The name of the Multi Region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>string</code> | The name of the parameter group associated with the multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards">numShards</a></code> | <code>number</code> | The number of shards the multi region cluster will contain. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]</code> | An array of key-value pairs to apply to this multi region cluster. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy">updateStrategy</a></code> | <code>string</code> | An enum string value that determines the update strategy for scaling. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

The compute and memory capacity of the nodes in the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

The engine type used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

The Redis engine version used by the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}

---

##### `multiRegionClusterNameSuffix`<sup>Optional</sup> <a name="multiRegionClusterNameSuffix" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix"></a>

```typescript
public readonly multiRegionClusterNameSuffix: string;
```

- *Type:* string

The name of the Multi Region cluster.

This value must be unique as it also serves as the multi region cluster identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}

---

##### `multiRegionParameterGroupName`<sup>Optional</sup> <a name="multiRegionParameterGroupName" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName"></a>

```typescript
public readonly multiRegionParameterGroupName: string;
```

- *Type:* string

The name of the parameter group associated with the multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

The number of shards the multi region cluster will contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MemorydbMultiRegionClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]

An array of key-value pairs to apply to this multi region cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled"></a>

```typescript
public readonly tlsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}

---

##### `updateStrategy`<sup>Optional</sup> <a name="updateStrategy" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy"></a>

```typescript
public readonly updateStrategy: string;
```

- *Type:* string

An enum string value that determines the update strategy for scaling.

Possible values are 'COORDINATED' and 'UNCOORDINATED'. Default is 'COORDINATED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}

---

### MemorydbMultiRegionClusterTags <a name="MemorydbMultiRegionClusterTags" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.Initializer"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

const memorydbMultiRegionClusterTags: memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.key">key</a></code> | <code>string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.value">value</a></code> | <code>string</code> | The tag's value. May be null. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#key MemorydbMultiRegionCluster#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/memorydb_multi_region_cluster#value MemorydbMultiRegionCluster#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbMultiRegionClusterTagsList <a name="MemorydbMultiRegionClusterTagsList" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

new memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get"></a>

```typescript
public get(index: number): MemorydbMultiRegionClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbMultiRegionClusterTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>[]

---


### MemorydbMultiRegionClusterTagsOutputReference <a name="MemorydbMultiRegionClusterTagsOutputReference" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer"></a>

```typescript
import { memorydbMultiRegionCluster } from '@cdktn/provider-awscc'

new memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MemorydbMultiRegionClusterTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTags">MemorydbMultiRegionClusterTags</a>

---



