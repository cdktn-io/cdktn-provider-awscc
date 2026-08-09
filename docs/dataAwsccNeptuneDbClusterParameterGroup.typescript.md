# `dataAwsccNeptuneDbClusterParameterGroup` Submodule <a name="`dataAwsccNeptuneDbClusterParameterGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNeptuneDbClusterParameterGroup <a name="DataAwsccNeptuneDbClusterParameterGroup" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster_parameter_group awscc_neptune_db_cluster_parameter_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup(scope: Construct, id: string, config: DataAwsccNeptuneDbClusterParameterGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig">DataAwsccNeptuneDbClusterParameterGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig">DataAwsccNeptuneDbClusterParameterGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isConstruct"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformElement"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNeptuneDbClusterParameterGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNeptuneDbClusterParameterGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNeptuneDbClusterParameterGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster_parameter_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNeptuneDbClusterParameterGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList">DataAwsccNeptuneDbClusterParameterGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.tags"></a>

```typescript
public readonly tags: DataAwsccNeptuneDbClusterParameterGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList">DataAwsccNeptuneDbClusterParameterGroupTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNeptuneDbClusterParameterGroupConfig <a name="DataAwsccNeptuneDbClusterParameterGroupConfig" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterParameterGroupConfig: dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/neptune_db_cluster_parameter_group#id DataAwsccNeptuneDbClusterParameterGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNeptuneDbClusterParameterGroupTags <a name="DataAwsccNeptuneDbClusterParameterGroupTags" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTags.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

const dataAwsccNeptuneDbClusterParameterGroupTags: dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNeptuneDbClusterParameterGroupTagsList <a name="DataAwsccNeptuneDbClusterParameterGroupTagsList" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference <a name="DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptuneDbClusterParameterGroup } from '@cdktn/provider-awscc'

new dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTags">DataAwsccNeptuneDbClusterParameterGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptuneDbClusterParameterGroupTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptuneDbClusterParameterGroup.DataAwsccNeptuneDbClusterParameterGroupTags">DataAwsccNeptuneDbClusterParameterGroupTags</a>

---



