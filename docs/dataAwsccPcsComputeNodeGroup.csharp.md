# `dataAwsccPcsComputeNodeGroup` Submodule <a name="`dataAwsccPcsComputeNodeGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcsComputeNodeGroup <a name="DataAwsccPcsComputeNodeGroup" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group awscc_pcs_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroup(Construct Scope, string Id, DataAwsccPcsComputeNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig">DataAwsccPcsComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPcsComputeNodeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPcsComputeNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPcsComputeNodeGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPcsComputeNodeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccPcsComputeNodeGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcsComputeNodeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcsComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcsComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId">AmiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId">ComputeNodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate">CustomLaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo">ErrorInfo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn">IamInstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs">InstanceConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions">NodeLifecycleActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption">PurchaseOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration">SlurmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AmiId`<sup>Required</sup> <a name="AmiId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.amiId"></a>

```csharp
public string AmiId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ComputeNodeGroupId`<sup>Required</sup> <a name="ComputeNodeGroupId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.computeNodeGroupId"></a>

```csharp
public string ComputeNodeGroupId { get; }
```

- *Type:* string

---

##### `CustomLaunchTemplate`<sup>Required</sup> <a name="CustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.customLaunchTemplate"></a>

```csharp
public DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference CustomLaunchTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference">DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference</a>

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.errorInfo"></a>

```csharp
public DataAwsccPcsComputeNodeGroupErrorInfoList ErrorInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList">DataAwsccPcsComputeNodeGroupErrorInfoList</a>

---

##### `IamInstanceProfileArn`<sup>Required</sup> <a name="IamInstanceProfileArn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.iamInstanceProfileArn"></a>

```csharp
public string IamInstanceProfileArn { get; }
```

- *Type:* string

---

##### `InstanceConfigs`<sup>Required</sup> <a name="InstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.instanceConfigs"></a>

```csharp
public DataAwsccPcsComputeNodeGroupInstanceConfigsList InstanceConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList">DataAwsccPcsComputeNodeGroupInstanceConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeLifecycleActions`<sup>Required</sup> <a name="NodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.nodeLifecycleActions"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference NodeLifecycleActions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference</a>

---

##### `PurchaseOption`<sup>Required</sup> <a name="PurchaseOption" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.purchaseOption"></a>

```csharp
public string PurchaseOption { get; }
```

- *Type:* string

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.scalingConfiguration"></a>

```csharp
public DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference">DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference</a>

---

##### `SlurmConfiguration`<sup>Required</sup> <a name="SlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.slurmConfiguration"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference SlurmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference">DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference</a>

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.spotOptions"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference SpotOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference">DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcsComputeNodeGroupConfig <a name="DataAwsccPcsComputeNodeGroupConfig" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/pcs_compute_node_group#id DataAwsccPcsComputeNodeGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplate <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupCustomLaunchTemplate {

};
```


### DataAwsccPcsComputeNodeGroupErrorInfo <a name="DataAwsccPcsComputeNodeGroupErrorInfo" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupErrorInfo {

};
```


### DataAwsccPcsComputeNodeGroupInstanceConfigs <a name="DataAwsccPcsComputeNodeGroupInstanceConfigs" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupInstanceConfigs {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActions <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActions {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady {

};
```


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource {

};
```


### DataAwsccPcsComputeNodeGroupScalingConfiguration <a name="DataAwsccPcsComputeNodeGroupScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupScalingConfiguration {

};
```


### DataAwsccPcsComputeNodeGroupSlurmConfiguration <a name="DataAwsccPcsComputeNodeGroupSlurmConfiguration" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSlurmConfiguration {

};
```


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings {

};
```


### DataAwsccPcsComputeNodeGroupSpotOptions <a name="DataAwsccPcsComputeNodeGroupSpotOptions" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSpotOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference <a name="DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupCustomLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupCustomLaunchTemplate">DataAwsccPcsComputeNodeGroupCustomLaunchTemplate</a>

---


### DataAwsccPcsComputeNodeGroupErrorInfoList <a name="DataAwsccPcsComputeNodeGroupErrorInfoList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupErrorInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get"></a>

```csharp
private DataAwsccPcsComputeNodeGroupErrorInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupErrorInfoOutputReference <a name="DataAwsccPcsComputeNodeGroupErrorInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupErrorInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupErrorInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupErrorInfo">DataAwsccPcsComputeNodeGroupErrorInfo</a>

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsList <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupInstanceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get"></a>

```csharp
private DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference <a name="DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupInstanceConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupInstanceConfigs">DataAwsccPcsComputeNodeGroupInstanceConfigs</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy">ScriptCachingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScriptCachingPolicy`<sup>Required</sup> <a name="ScriptCachingPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.scriptCachingPolicy"></a>

```csharp
public string ScriptCachingPolicy { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.stages"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference Stages { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActions">DataAwsccPcsComputeNodeGroupNodeLifecycleActions</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get"></a>

```csharp
private DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError">OnError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.executionPolicy"></a>

```csharp
public string ExecutionPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.onError"></a>

```csharp
public string OnError { get; }
```

- *Type:* string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.scriptSource"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference ScriptSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrapped</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.s3VersionId"></a>

```csharp
public string S3VersionId { get; }
```

- *Type:* string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get"></a>

```csharp
private DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments">Arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy">ExecutionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError">OnError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource">ScriptSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.arguments"></a>

```csharp
public string[] Arguments { get; }
```

- *Type:* string[]

---

##### `ExecutionPolicy`<sup>Required</sup> <a name="ExecutionPolicy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.executionPolicy"></a>

```csharp
public string ExecutionPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnError`<sup>Required</sup> <a name="OnError" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.onError"></a>

```csharp
public string OnError { get; }
```

- *Type:* string

---

##### `ScriptSource`<sup>Required</sup> <a name="ScriptSource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.scriptSource"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference ScriptSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReady</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId">S3VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `S3VersionId`<sup>Required</sup> <a name="S3VersionId" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.s3VersionId"></a>

```csharp
public string S3VersionId { get; }
```

- *Type:* string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyScriptSource</a>

---


### DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference <a name="DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped">NodeBootstrapped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady">NodeReady</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeBootstrapped`<sup>Required</sup> <a name="NodeBootstrapped" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeBootstrapped"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList NodeBootstrapped { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeBootstrappedList</a>

---

##### `NodeReady`<sup>Required</sup> <a name="NodeReady" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.nodeReady"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList NodeReady { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesNodeReadyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStagesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages">DataAwsccPcsComputeNodeGroupNodeLifecycleActionsStages</a>

---


### DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupScalingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupScalingConfiguration">DataAwsccPcsComputeNodeGroupScalingConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">ScaleDownIdleTimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings">SlurmCustomSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleDownIdleTimeInSeconds`<sup>Required</sup> <a name="ScaleDownIdleTimeInSeconds" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```csharp
public double ScaleDownIdleTimeInSeconds { get; }
```

- *Type:* double

---

##### `SlurmCustomSettings`<sup>Required</sup> <a name="SlurmCustomSettings" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList SlurmCustomSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSlurmConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfiguration">DataAwsccPcsComputeNodeGroupSlurmConfiguration</a>

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get"></a>

```csharp
private DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference <a name="DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">ParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```csharp
public string ParameterName { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings">DataAwsccPcsComputeNodeGroupSlurmConfigurationSlurmCustomSettings</a>

---


### DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference <a name="DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPcsComputeNodeGroupSpotOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcsComputeNodeGroup.DataAwsccPcsComputeNodeGroupSpotOptions">DataAwsccPcsComputeNodeGroupSpotOptions</a>

---



