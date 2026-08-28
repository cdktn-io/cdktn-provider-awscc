# `dataAwsccElasticacheCacheCluster` Submodule <a name="`dataAwsccElasticacheCacheCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheCacheCluster <a name="DataAwsccElasticacheCacheCluster" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_cache_cluster awscc_elasticache_cache_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster(scope: Construct, id: string, config: DataAwsccElasticacheCacheClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig">DataAwsccElasticacheCacheClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig">DataAwsccElasticacheCacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheCacheCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isConstruct"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformElement"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticacheCacheCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticacheCacheCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticacheCacheCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_cache_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheCacheCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.azMode">azMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheNodeType">cacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheParameterGroupName">cacheParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheSecurityGroupNames">cacheSecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheSubnetGroupName">cacheSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.configurationEndpoint">configurationEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference">DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.ipDiscovery">ipDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.logDeliveryConfigurations">logDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.numCacheNodes">numCacheNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredAvailabilityZone">preferredAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredAvailabilityZones">preferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.redisEndpoint">redisEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference">DataAwsccElasticacheCacheClusterRedisEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotArns">snapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotWindow">snapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList">DataAwsccElasticacheCacheClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.autoMinorVersionUpgrade"></a>

```typescript
public readonly autoMinorVersionUpgrade: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.azMode"></a>

```typescript
public readonly azMode: string;
```

- *Type:* string

---

##### `cacheNodeType`<sup>Required</sup> <a name="cacheNodeType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheNodeType"></a>

```typescript
public readonly cacheNodeType: string;
```

- *Type:* string

---

##### `cacheParameterGroupName`<sup>Required</sup> <a name="cacheParameterGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheParameterGroupName"></a>

```typescript
public readonly cacheParameterGroupName: string;
```

- *Type:* string

---

##### `cacheSecurityGroupNames`<sup>Required</sup> <a name="cacheSecurityGroupNames" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheSecurityGroupNames"></a>

```typescript
public readonly cacheSecurityGroupNames: string[];
```

- *Type:* string[]

---

##### `cacheSubnetGroupName`<sup>Required</sup> <a name="cacheSubnetGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.cacheSubnetGroupName"></a>

```typescript
public readonly cacheSubnetGroupName: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `configurationEndpoint`<sup>Required</sup> <a name="configurationEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.configurationEndpoint"></a>

```typescript
public readonly configurationEndpoint: DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference">DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference</a>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `ipDiscovery`<sup>Required</sup> <a name="ipDiscovery" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.ipDiscovery"></a>

```typescript
public readonly ipDiscovery: string;
```

- *Type:* string

---

##### `logDeliveryConfigurations`<sup>Required</sup> <a name="logDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.logDeliveryConfigurations"></a>

```typescript
public readonly logDeliveryConfigurations: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList</a>

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `numCacheNodes`<sup>Required</sup> <a name="numCacheNodes" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.numCacheNodes"></a>

```typescript
public readonly numCacheNodes: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredAvailabilityZone`<sup>Required</sup> <a name="preferredAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredAvailabilityZone"></a>

```typescript
public readonly preferredAvailabilityZone: string;
```

- *Type:* string

---

##### `preferredAvailabilityZones`<sup>Required</sup> <a name="preferredAvailabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredAvailabilityZones"></a>

```typescript
public readonly preferredAvailabilityZones: string[];
```

- *Type:* string[]

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `redisEndpoint`<sup>Required</sup> <a name="redisEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.redisEndpoint"></a>

```typescript
public readonly redisEndpoint: DataAwsccElasticacheCacheClusterRedisEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference">DataAwsccElasticacheCacheClusterRedisEndpointOutputReference</a>

---

##### `snapshotArns`<sup>Required</sup> <a name="snapshotArns" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotArns"></a>

```typescript
public readonly snapshotArns: string[];
```

- *Type:* string[]

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotRetentionLimit"></a>

```typescript
public readonly snapshotRetentionLimit: number;
```

- *Type:* number

---

##### `snapshotWindow`<sup>Required</sup> <a name="snapshotWindow" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.snapshotWindow"></a>

```typescript
public readonly snapshotWindow: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.tags"></a>

```typescript
public readonly tags: DataAwsccElasticacheCacheClusterTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList">DataAwsccElasticacheCacheClusterTagsList</a>

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.transitEncryptionEnabled"></a>

```typescript
public readonly transitEncryptionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheCacheClusterConfig <a name="DataAwsccElasticacheCacheClusterConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterConfig: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticache_cache_cluster#id DataAwsccElasticacheCacheCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheCacheClusterConfigurationEndpoint <a name="DataAwsccElasticacheCacheClusterConfigurationEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpoint.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterConfigurationEndpoint: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpoint = { ... }
```


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurations <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurations.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterLogDeliveryConfigurations: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurations = { ... }
```


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails = { ... }
```


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails = { ... }
```


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails = { ... }
```


### DataAwsccElasticacheCacheClusterRedisEndpoint <a name="DataAwsccElasticacheCacheClusterRedisEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpoint.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterRedisEndpoint: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpoint = { ... }
```


### DataAwsccElasticacheCacheClusterTags <a name="DataAwsccElasticacheCacheClusterTags" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTags.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

const dataAwsccElasticacheCacheClusterTags: dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference <a name="DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpoint">DataAwsccElasticacheCacheClusterConfigurationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterConfigurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterConfigurationEndpoint">DataAwsccElasticacheCacheClusterConfigurationEndpoint</a>

---


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">cloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">kinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsDetails`<sup>Required</sup> <a name="cloudwatchLogsDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```typescript
public readonly cloudwatchLogsDetails: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `kinesisFirehoseDetails`<sup>Required</sup> <a name="kinesisFirehoseDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```typescript
public readonly kinesisFirehoseDetails: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

---


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference <a name="DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails">destinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurations">DataAwsccElasticacheCacheClusterLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationDetails`<sup>Required</sup> <a name="destinationDetails" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```typescript
public readonly destinationDetails: DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterLogDeliveryConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterLogDeliveryConfigurations">DataAwsccElasticacheCacheClusterLogDeliveryConfigurations</a>

---


### DataAwsccElasticacheCacheClusterRedisEndpointOutputReference <a name="DataAwsccElasticacheCacheClusterRedisEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpoint">DataAwsccElasticacheCacheClusterRedisEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterRedisEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterRedisEndpoint">DataAwsccElasticacheCacheClusterRedisEndpoint</a>

---


### DataAwsccElasticacheCacheClusterTagsList <a name="DataAwsccElasticacheCacheClusterTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticacheCacheClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticacheCacheClusterTagsOutputReference <a name="DataAwsccElasticacheCacheClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticacheCacheCluster } from '@cdktn/provider-awscc'

new dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTags">DataAwsccElasticacheCacheClusterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticacheCacheClusterTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheCacheCluster.DataAwsccElasticacheCacheClusterTags">DataAwsccElasticacheCacheClusterTags</a>

---



