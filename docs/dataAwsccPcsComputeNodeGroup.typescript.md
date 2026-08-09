# `dataAwsccPcsComputeNodeGroup` Submodule <a name="`dataAwsccPcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcsComputeNodeGroup <a name="DataAwsccPcsComputeNodeGroup" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup(scope: Construct, id: string, config: DataAwsccPcsComputeNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcsComputeNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId">amiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId">computeNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate">customLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn">iamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs">instanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions">nodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption">purchaseOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration">slurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `amiId`<sup>Required</sup> <a name="amiId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId"></a>

```typescript
public readonly amiId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `computeNodeGroupId`<sup>Required</sup> <a name="computeNodeGroupId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId"></a>

```typescript
public readonly computeNodeGroupId: string;
```

- *Type:* string

---

##### `customLaunchTemplate`<sup>Required</sup> <a name="customLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate"></a>

```typescript
public readonly customLaunchTemplate: DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo"></a>

```typescript
public readonly errorInfo: DataAwsccPcsComputeNodeGroupErrorInfoList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a>

---

##### `iamInstanceProfileArn`<sup>Required</sup> <a name="iamInstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```typescript
public readonly iamInstanceProfileArn: string;
```

- *Type:* string

---

##### `instanceConfigs`<sup>Required</sup> <a name="instanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs"></a>

```typescript
public readonly instanceConfigs: DataAwsccPcsComputeNodeGroupInstanceConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeLifecycleActions`<sup>Required</sup> <a name="nodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```typescript
public readonly nodeLifecycleActions: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `purchaseOption`<sup>Required</sup> <a name="purchaseOption" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption"></a>

```typescript
public readonly purchaseOption: string;
```

- *Type:* string

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `slurmConfiguration`<sup>Required</sup> <a name="slurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration"></a>

```typescript
public readonly slurmConfiguration: DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions"></a>

```typescript
public readonly spotOptions: DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcsComputeNodeGroupConfig <a name="DataAwsccPcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupConfig: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplate <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupCustomLaunchTemplate: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate = { ... }
```


### DataAwsccPcsComputeNodeGroupErrorInfo <a name="DataAwsccPcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupErrorInfo: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo = { ... }
```


### DataAwsccPcsComputeNodeGroupInstanceConfigs <a name="DataAwsccPcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupInstanceConfigs: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActions <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActions: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady = { ... }
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource = { ... }
```


### DataAwsccPcsComputeNodeGroupScalingConfiguration <a name="DataAwsccPcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupScalingConfiguration: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration = { ... }
```


### DataAwsccPcsComputeNodeGroupSlurmConfiguration <a name="DataAwsccPcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupSlurmConfiguration: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration = { ... }
```


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings = { ... }
```


### DataAwsccPcsComputeNodeGroupSpotOptions <a name="DataAwsccPcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

const dataAwsccPcsComputeNodeGroupSpotOptions: dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupCustomLaunchTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a>

---


### DataAwsccPcsComputeNodeGroupErrorInfoList <a name="DataAwsccPcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get"></a>

```typescript
public get(index: number): DataAwsccPcsComputeNodeGroupErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupErrorInfoOutputReference <a name="DataAwsccPcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupErrorInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a>

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsList <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get"></a>

```typescript
public get(index: number): DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupInstanceConfigs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">scriptCachingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptCachingPolicy`<sup>Required</sup> <a name="scriptCachingPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```typescript
public readonly scriptCachingPolicy: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```typescript
public readonly stages: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```typescript
public get(index: number): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">onError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```typescript
public readonly scriptSource: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```typescript
public get(index: number): DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">executionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">onError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">scriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `executionPolicy`<sup>Required</sup> <a name="executionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```typescript
public readonly executionPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onError`<sup>Required</sup> <a name="onError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```typescript
public readonly onError: string;
```

- *Type:* string

---

##### `scriptSource`<sup>Required</sup> <a name="scriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```typescript
public readonly scriptSource: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">s3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `s3VersionId`<sup>Required</sup> <a name="s3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```typescript
public readonly s3VersionId: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">nodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">nodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeBootstrapped`<sup>Required</sup> <a name="nodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```typescript
public readonly nodeBootstrapped: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `nodeReady`<sup>Required</sup> <a name="nodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```typescript
public readonly nodeReady: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a>

---


### DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```typescript
public readonly maxInstanceCount: number;
```

- *Type:* number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```typescript
public readonly minInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">scaleDownIdleTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">slurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="scaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```typescript
public readonly scaleDownIdleTimeInSeconds: number;
```

- *Type:* number

---

##### `slurmCustomSettings`<sup>Required</sup> <a name="slurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```typescript
public readonly slurmCustomSettings: DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupSlurmConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>

---


### DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference <a name="DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcsComputeNodeGroup } from '@cdktn/provider-awscc'

new dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```typescript
public readonly allocationStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcsComputeNodeGroupSpotOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a>

---



