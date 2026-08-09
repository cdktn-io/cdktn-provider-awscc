# `dataAwsccInspectorv2CisScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CisScanConfiguration <a name="DataAwsccInspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfiguration(Construct Scope, string Id, DataAwsccInspectorv2CisScanConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig">DataAwsccInspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CisScanConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CisScanConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CisScanConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CisScanConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2CisScanConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName">ScanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName"></a>

```csharp
public string ScanName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CisScanConfigurationConfig <a name="DataAwsccInspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CisScanConfigurationSchedule <a name="DataAwsccInspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationSchedule {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDaily <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleDaily {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthly {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeekly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeekly {

};
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime {

};
```


### DataAwsccInspectorv2CisScanConfigurationTargets <a name="DataAwsccInspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationTargets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthly InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">OneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference Daily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference Monthly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```csharp
public string OneTime { get; }
```

- *Type:* string

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference Weekly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">Days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```csharp
public string[] Days { get; }
```

- *Type:* string[]

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">TargetResourceTags</a></code> | <code>Io.Cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```csharp
public StringListMap TargetResourceTags { get; }
```

- *Type:* Io.Cdktn.StringListMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CisScanConfigurationTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a>

---



