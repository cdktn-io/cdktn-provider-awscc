# `dataAwsccInspectorv2CodeSecurityScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CodeSecurityScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CodeSecurityScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfiguration(Construct Scope, string Id, DataAwsccInspectorv2CodeSecurityScanConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig">DataAwsccInspectorv2CodeSecurityScanConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig">DataAwsccInspectorv2CodeSecurityScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityScanConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityScanConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityScanConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2CodeSecurityScanConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityScanConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2CodeSecurityScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.scopeSettings">ScopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.configuration"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a>

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScopeSettings`<sup>Required</sup> <a name="ScopeSettings" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.scopeSettings"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference ScopeSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfig <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/inspectorv2_code_security_scan_configuration#id DataAwsccInspectorv2CodeSecurityScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration {

};
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration {

};
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration {

};
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents"></a>

```csharp
public string[] SupportedEvents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration">ContinuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration">PeriodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories">RuleSetCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousIntegrationScanConfiguration`<sup>Required</sup> <a name="ContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference ContinuousIntegrationScanConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a>

---

##### `PeriodicScanConfiguration`<sup>Required</sup> <a name="PeriodicScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference PeriodicScanConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a>

---

##### `RuleSetCategories`<sup>Required</sup> <a name="RuleSetCategories" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories"></a>

```csharp
public string[] RuleSetCategories { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression">FrequencyExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `FrequencyExpression`<sup>Required</sup> <a name="FrequencyExpression" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression"></a>

```csharp
public string FrequencyExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope">ProjectSelectionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectSelectionScope`<sup>Required</sup> <a name="ProjectSelectionScope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope"></a>

```csharp
public string ProjectSelectionScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---



