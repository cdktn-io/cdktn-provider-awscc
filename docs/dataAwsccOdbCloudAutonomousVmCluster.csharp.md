# `dataAwsccOdbCloudAutonomousVmCluster` Submodule <a name="`dataAwsccOdbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbCloudAutonomousVmCluster <a name="DataAwsccOdbCloudAutonomousVmCluster" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmCluster(Construct Scope, string Id, DataAwsccOdbCloudAutonomousVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig">DataAwsccOdbCloudAutonomousVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig">DataAwsccOdbCloudAutonomousVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbCloudAutonomousVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbCloudAutonomousVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbCloudAutonomousVmCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOdbCloudAutonomousVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOdbCloudAutonomousVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">AutonomousDataStoragePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs">AutonomousDataStorageSizeInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs">AvailableAutonomousDataStorageSizeInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableContainerDatabases">AvailableContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableCpus">AvailableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn">CloudAutonomousVmClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId">CloudAutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">CpuCoreCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs">DataStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs">DataStorageSizeInTBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs">DbNodeStorageSizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbServers">DbServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue">ExadataStorageInTBsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.iamRoles">IamRoles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList">DataAwsccOdbCloudAutonomousVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">IsMtlsEnabledVmCluster</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">MaxAcdsLowestScaledValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs">MemoryPerOracleComputeUnitInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memorySizeInGBs">MemorySizeInGBs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">NonProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">ProvisionableAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">ProvisionedAutonomousContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedCpus">ProvisionedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reclaimableCpus">ReclaimableCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reservedCpus">ReservedCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">ScanListenerPortNonTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortTls">ScanListenerPortTls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList">DataAwsccOdbCloudAutonomousVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.totalContainerDatabases">TotalContainerDatabases</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AutonomousDataStoragePercentage`<sup>Required</sup> <a name="AutonomousDataStoragePercentage" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```csharp
public double AutonomousDataStoragePercentage { get; }
```

- *Type:* double

---

##### `AutonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="AutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs"></a>

```csharp
public double AutonomousDataStorageSizeInTBs { get; }
```

- *Type:* double

---

##### `AvailableAutonomousDataStorageSizeInTBs`<sup>Required</sup> <a name="AvailableAutonomousDataStorageSizeInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs"></a>

```csharp
public double AvailableAutonomousDataStorageSizeInTBs { get; }
```

- *Type:* double

---

##### `AvailableContainerDatabases`<sup>Required</sup> <a name="AvailableContainerDatabases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```csharp
public double AvailableContainerDatabases { get; }
```

- *Type:* double

---

##### `AvailableCpus`<sup>Required</sup> <a name="AvailableCpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableCpus"></a>

```csharp
public double AvailableCpus { get; }
```

- *Type:* double

---

##### `CloudAutonomousVmClusterArn`<sup>Required</sup> <a name="CloudAutonomousVmClusterArn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn"></a>

```csharp
public string CloudAutonomousVmClusterArn { get; }
```

- *Type:* string

---

##### `CloudAutonomousVmClusterId`<sup>Required</sup> <a name="CloudAutonomousVmClusterId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId"></a>

```csharp
public string CloudAutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CpuCoreCountPerNode`<sup>Required</sup> <a name="CpuCoreCountPerNode" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```csharp
public double CpuCoreCountPerNode { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `DataStorageSizeInGBs`<sup>Required</sup> <a name="DataStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs"></a>

```csharp
public double DataStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTBs`<sup>Required</sup> <a name="DataStorageSizeInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs"></a>

```csharp
public double DataStorageSizeInTBs { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeInGBs`<sup>Required</sup> <a name="DbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs"></a>

```csharp
public double DbNodeStorageSizeInGBs { get; }
```

- *Type:* double

---

##### `DbServers`<sup>Required</sup> <a name="DbServers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbServers"></a>

```csharp
public string[] DbServers { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExadataStorageInTBsLowestScaledValue`<sup>Required</sup> <a name="ExadataStorageInTBsLowestScaledValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue"></a>

```csharp
public double ExadataStorageInTBsLowestScaledValue { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.iamRoles"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterIamRolesList IamRoles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList">DataAwsccOdbCloudAutonomousVmClusterIamRolesList</a>

---

##### `IsMtlsEnabledVmCluster`<sup>Required</sup> <a name="IsMtlsEnabledVmCluster" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```csharp
public IResolvable IsMtlsEnabledVmCluster { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a>

---

##### `MaxAcdsLowestScaledValue`<sup>Required</sup> <a name="MaxAcdsLowestScaledValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```csharp
public double MaxAcdsLowestScaledValue { get; }
```

- *Type:* double

---

##### `MemoryPerOracleComputeUnitInGBs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs"></a>

```csharp
public double MemoryPerOracleComputeUnitInGBs { get; }
```

- *Type:* double

---

##### `MemorySizeInGBs`<sup>Required</sup> <a name="MemorySizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memorySizeInGBs"></a>

```csharp
public double MemorySizeInGBs { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="NonProvisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```csharp
public double NonProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `ProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionableAutonomousContainerDatabases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```csharp
public double ProvisionableAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="ProvisionedAutonomousContainerDatabases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```csharp
public double ProvisionedAutonomousContainerDatabases { get; }
```

- *Type:* double

---

##### `ProvisionedCpus`<sup>Required</sup> <a name="ProvisionedCpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```csharp
public double ProvisionedCpus { get; }
```

- *Type:* double

---

##### `ReclaimableCpus`<sup>Required</sup> <a name="ReclaimableCpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```csharp
public double ReclaimableCpus { get; }
```

- *Type:* double

---

##### `ReservedCpus`<sup>Required</sup> <a name="ReservedCpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```csharp
public double ReservedCpus { get; }
```

- *Type:* double

---

##### `ScanListenerPortNonTls`<sup>Required</sup> <a name="ScanListenerPortNonTls" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```csharp
public double ScanListenerPortNonTls { get; }
```

- *Type:* double

---

##### `ScanListenerPortTls`<sup>Required</sup> <a name="ScanListenerPortTls" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```csharp
public double ScanListenerPortTls { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tags"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList">DataAwsccOdbCloudAutonomousVmClusterTagsList</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `TotalContainerDatabases`<sup>Required</sup> <a name="TotalContainerDatabases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```csharp
public double TotalContainerDatabases { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbCloudAutonomousVmClusterConfig <a name="DataAwsccOdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#id DataAwsccOdbCloudAutonomousVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbCloudAutonomousVmClusterIamRoles <a name="DataAwsccOdbCloudAutonomousVmClusterIamRoles" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterIamRoles {

};
```


### DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow <a name="DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow {

};
```


### DataAwsccOdbCloudAutonomousVmClusterTags <a name="DataAwsccOdbCloudAutonomousVmClusterTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbCloudAutonomousVmClusterIamRolesList <a name="DataAwsccOdbCloudAutonomousVmClusterIamRolesList" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterIamRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get"></a>

```csharp
private DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration">AwsIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles">DataAwsccOdbCloudAutonomousVmClusterIamRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsIntegration`<sup>Required</sup> <a name="AwsIntegration" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```csharp
public string AwsIntegration { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterIamRoles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles">DataAwsccOdbCloudAutonomousVmClusterIamRoles</a>

---


### DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">LeadTimeInWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `LeadTimeInWeeks`<sup>Required</sup> <a name="LeadTimeInWeeks" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```csharp
public double LeadTimeInWeeks { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow</a>

---


### DataAwsccOdbCloudAutonomousVmClusterTagsList <a name="DataAwsccOdbCloudAutonomousVmClusterTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get"></a>

```csharp
private DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags">DataAwsccOdbCloudAutonomousVmClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOdbCloudAutonomousVmClusterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags">DataAwsccOdbCloudAutonomousVmClusterTags</a>

---



