# `dataAwsccEc2CapacityManagerDataExport` Submodule <a name="`dataAwsccEc2CapacityManagerDataExport` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2CapacityManagerDataExport <a name="DataAwsccEc2CapacityManagerDataExport" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_manager_data_export awscc_ec2_capacity_manager_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport(scope: Construct, id: string, config: DataAwsccEc2CapacityManagerDataExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig">DataAwsccEc2CapacityManagerDataExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig">DataAwsccEc2CapacityManagerDataExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isConstruct"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformElement"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2CapacityManagerDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2CapacityManagerDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_manager_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2CapacityManagerDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.capacityManagerDataExportId">capacityManagerDataExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList">DataAwsccEc2CapacityManagerDataExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `capacityManagerDataExportId`<sup>Required</sup> <a name="capacityManagerDataExportId" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.capacityManagerDataExportId"></a>

```typescript
public readonly capacityManagerDataExportId: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.s3BucketPrefix"></a>

```typescript
public readonly s3BucketPrefix: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2CapacityManagerDataExportTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList">DataAwsccEc2CapacityManagerDataExportTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2CapacityManagerDataExportConfig <a name="DataAwsccEc2CapacityManagerDataExportConfig" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityManagerDataExportConfig: dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_capacity_manager_data_export#id DataAwsccEc2CapacityManagerDataExport#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2CapacityManagerDataExportTags <a name="DataAwsccEc2CapacityManagerDataExportTags" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTags.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

const dataAwsccEc2CapacityManagerDataExportTags: dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2CapacityManagerDataExportTagsList <a name="DataAwsccEc2CapacityManagerDataExportTagsList" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2CapacityManagerDataExportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2CapacityManagerDataExportTagsOutputReference <a name="DataAwsccEc2CapacityManagerDataExportTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTags">DataAwsccEc2CapacityManagerDataExportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2CapacityManagerDataExportTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2CapacityManagerDataExport.DataAwsccEc2CapacityManagerDataExportTags">DataAwsccEc2CapacityManagerDataExportTags</a>

---



