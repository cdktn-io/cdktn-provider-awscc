# `dataAwsccNetworkfirewallLoggingConfiguration` Submodule <a name="`dataAwsccNetworkfirewallLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfiguration(Construct Scope, string Id, DataAwsccNetworkfirewallLoggingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig">DataAwsccNetworkfirewallLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig">DataAwsccNetworkfirewallLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkfirewallLoggingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkfirewallLoggingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkfirewallLoggingConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkfirewallLoggingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallLoggingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard">EnableMonitoringDashboard</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn">FirewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName">FirewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `EnableMonitoringDashboard`<sup>Required</sup> <a name="EnableMonitoringDashboard" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard"></a>

```csharp
public IResolvable EnableMonitoringDashboard { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallArn"></a>

```csharp
public string FirewallArn { get; }
```

- *Type:* string

---

##### `FirewallName`<sup>Required</sup> <a name="FirewallName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.firewallName"></a>

```csharp
public string FirewallName { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.loggingConfiguration"></a>

```csharp
public DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallLoggingConfigurationConfig <a name="DataAwsccNetworkfirewallLoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_logging_configuration#id DataAwsccNetworkfirewallLoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration {

};
```


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get"></a>

```csharp
private DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination">LogDestination</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination"></a>

```csharp
public StringMap LogDestination { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType"></a>

```csharp
public string LogDestinationType { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs</a>

---


### DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference <a name="DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs"></a>

```csharp
public DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList LogDestinationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallLoggingConfiguration.DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration">DataAwsccNetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---



