# `dataAwsccRdsDbClusterEndpoint` Submodule <a name="`dataAwsccRdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsDbClusterEndpointA <a name="DataAwsccRdsDbClusterEndpointA" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA(scope: Construct, id: string, config: DataAwsccRdsDbClusterEndpointAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig">DataAwsccRdsDbClusterEndpointAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig">DataAwsccRdsDbClusterEndpointAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRdsDbClusterEndpointA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.customEndpointType">customEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointArn">dbClusterEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">dbClusterEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">dbClusterEndpointResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.excludedMembers">excludedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.staticMembers">staticMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList">DataAwsccRdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `customEndpointType`<sup>Required</sup> <a name="customEndpointType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.customEndpointType"></a>

```typescript
public readonly customEndpointType: string;
```

- *Type:* string

---

##### `dbClusterEndpointArn`<sup>Required</sup> <a name="dbClusterEndpointArn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```typescript
public readonly dbClusterEndpointArn: string;
```

- *Type:* string

---

##### `dbClusterEndpointIdentifier`<sup>Required</sup> <a name="dbClusterEndpointIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```typescript
public readonly dbClusterEndpointIdentifier: string;
```

- *Type:* string

---

##### `dbClusterEndpointResourceIdentifier`<sup>Required</sup> <a name="dbClusterEndpointResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```typescript
public readonly dbClusterEndpointResourceIdentifier: string;
```

- *Type:* string

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `excludedMembers`<sup>Required</sup> <a name="excludedMembers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.excludedMembers"></a>

```typescript
public readonly excludedMembers: string[];
```

- *Type:* string[]

---

##### `staticMembers`<sup>Required</sup> <a name="staticMembers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.staticMembers"></a>

```typescript
public readonly staticMembers: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tags"></a>

```typescript
public readonly tags: DataAwsccRdsDbClusterEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList">DataAwsccRdsDbClusterEndpointTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsDbClusterEndpointAConfig <a name="DataAwsccRdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.Initializer"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

const dataAwsccRdsDbClusterEndpointAConfig: dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/rds_db_cluster_endpoint#id DataAwsccRdsDbClusterEndpointA#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsDbClusterEndpointTags <a name="DataAwsccRdsDbClusterEndpointTags" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags.Initializer"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

const dataAwsccRdsDbClusterEndpointTags: dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsDbClusterEndpointTagsList <a name="DataAwsccRdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRdsDbClusterEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRdsDbClusterEndpointTagsOutputReference <a name="DataAwsccRdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRdsDbClusterEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags">DataAwsccRdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRdsDbClusterEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsDbClusterEndpoint.DataAwsccRdsDbClusterEndpointTags">DataAwsccRdsDbClusterEndpointTags</a>

---



