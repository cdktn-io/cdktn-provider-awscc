# `dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule <a name="`dataAwsccIotwirelessNetworkAnalyzerConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfiguration <a name="DataAwsccIotwirelessNetworkAnalyzerConfiguration" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_network_analyzer_configuration awscc_iotwireless_network_analyzer_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfiguration(Construct Scope, string Id, DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig">DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessNetworkAnalyzerConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessNetworkAnalyzerConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessNetworkAnalyzerConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotwirelessNetworkAnalyzerConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotwirelessNetworkAnalyzerConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessNetworkAnalyzerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_network_analyzer_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessNetworkAnalyzerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent">TraceContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices">WirelessDevices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways">WirelessGateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tags"></a>

```csharp
public DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList">DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList</a>

---

##### `TraceContent`<sup>Required</sup> <a name="TraceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.traceContent"></a>

```csharp
public DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference TraceContent { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference</a>

---

##### `WirelessDevices`<sup>Required</sup> <a name="WirelessDevices" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessDevices"></a>

```csharp
public string[] WirelessDevices { get; }
```

- *Type:* string[]

---

##### `WirelessGateways`<sup>Required</sup> <a name="WirelessGateways" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.wirelessGateways"></a>

```csharp
public string[] WirelessGateways { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_network_analyzer_configuration#id DataAwsccIotwirelessNetworkAnalyzerConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTags <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationTags {

};
```


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get"></a>

```csharp
private DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessNetworkAnalyzerConfigurationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTags">DataAwsccIotwirelessNetworkAnalyzerConfigurationTags</a>

---


### DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference <a name="DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo">WirelessDeviceFrameInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `WirelessDeviceFrameInfo`<sup>Required</sup> <a name="WirelessDeviceFrameInfo" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.wirelessDeviceFrameInfo"></a>

```csharp
public string WirelessDeviceFrameInfo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessNetworkAnalyzerConfiguration.DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent">DataAwsccIotwirelessNetworkAnalyzerConfigurationTraceContent</a>

---



