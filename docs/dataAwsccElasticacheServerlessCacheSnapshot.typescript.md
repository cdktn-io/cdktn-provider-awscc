# `dataAwsccElasticacheServerlessCacheSnapshot` Submodule <a name="`dataAwsccElasticacheServerlessCacheSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheServerlessCacheSnapshot <a name="DataAwsccElasticacheServerlessCacheSnapshot" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot(scope: Construct, id: string, config: DataAwsccElasticacheServerlessCacheSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig">DataAwsccElasticacheServerlessCacheSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig">DataAwsccElasticacheServerlessCacheSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticacheServerlessCacheSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticacheServerlessCacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheServerlessCacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.bytesUsedForCache">bytesUsedForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration">serverlessCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName">serverlessCacheSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList">DataAwsccElasticacheServerlessCacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bytesUsedForCache`<sup>Required</sup> <a name="bytesUsedForCache" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.bytesUsedForCache"></a>

```typescript
public readonly bytesUsedForCache: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `serverlessCacheConfiguration`<sup>Required</sup> <a name="serverlessCacheConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration"></a>

```typescript
public readonly serverlessCacheConfiguration: DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a>

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

---

##### `serverlessCacheSnapshotName`<sup>Required</sup> <a name="serverlessCacheSnapshotName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName"></a>

```typescript
public readonly serverlessCacheSnapshotName: string;
```

- *Type:* string

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tags"></a>

```typescript
public readonly tags: DataAwsccElasticacheServerlessCacheSnapshotTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList">DataAwsccElasticacheServerlessCacheSnapshotTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheServerlessCacheSnapshotConfig <a name="DataAwsccElasticacheServerlessCacheSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const dataAwsccElasticacheServerlessCacheSnapshotConfig: dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot#id DataAwsccElasticacheServerlessCacheSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration <a name="DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const dataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration: dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration = { ... }
```


### DataAwsccElasticacheServerlessCacheSnapshotTags <a name="DataAwsccElasticacheServerlessCacheSnapshotTags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

const dataAwsccElasticacheServerlessCacheSnapshotTags: dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference <a name="DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion">majorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName">serverlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion"></a>

```typescript
public readonly majorEngineVersion: string;
```

- *Type:* string

---

##### `serverlessCacheName`<sup>Required</sup> <a name="serverlessCacheName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName"></a>

```typescript
public readonly serverlessCacheName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a>

---


### DataAwsccElasticacheServerlessCacheSnapshotTagsList <a name="DataAwsccElasticacheServerlessCacheSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference <a name="DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheServerlessCacheSnapshot } from '@cdktn/provider-awscc'

new dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags">DataAwsccElasticacheServerlessCacheSnapshotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheServerlessCacheSnapshotTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags">DataAwsccElasticacheServerlessCacheSnapshotTags</a>

---



