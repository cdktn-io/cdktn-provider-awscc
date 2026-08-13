# `dataAwsccWafv2LoggingConfiguration` Submodule <a name="`dataAwsccWafv2LoggingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWafv2LoggingConfiguration <a name="DataAwsccWafv2LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wafv2_logging_configuration awscc_wafv2_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfiguration(Construct Scope, string Id, DataAwsccWafv2LoggingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig">DataAwsccWafv2LoggingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig">DataAwsccWafv2LoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWafv2LoggingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWafv2LoggingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWafv2LoggingConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWafv2LoggingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWafv2LoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWafv2LoggingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWafv2LoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wafv2_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWafv2LoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager">ManagedByFirewallManager</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields">RedactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.logDestinationConfigs"></a>

```csharp
public string[] LogDestinationConfigs { get; }
```

- *Type:* string[]

---

##### `LoggingFilter`<sup>Required</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.loggingFilter"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference LoggingFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference</a>

---

##### `ManagedByFirewallManager`<sup>Required</sup> <a name="ManagedByFirewallManager" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.managedByFirewallManager"></a>

```csharp
public IResolvable ManagedByFirewallManager { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RedactedFields`<sup>Required</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.redactedFields"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationRedactedFieldsList RedactedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList">DataAwsccWafv2LoggingConfigurationRedactedFieldsList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWafv2LoggingConfigurationConfig <a name="DataAwsccWafv2LoggingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/wafv2_logging_configuration#id DataAwsccWafv2LoggingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWafv2LoggingConfigurationLoggingFilter <a name="DataAwsccWafv2LoggingConfigurationLoggingFilter" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilter {

};
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFilters <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFilters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFilters {

};
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions {

};
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition {

};
```


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition {

};
```


### DataAwsccWafv2LoggingConfigurationRedactedFields <a name="DataAwsccWafv2LoggingConfigurationRedactedFields" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationRedactedFields {

};
```


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">LabelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```csharp
public string LabelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get"></a>

```csharp
private DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionCondition`<sup>Required</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference ActionCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `LabelNameCondition`<sup>Required</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference LabelNameCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditions</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get"></a>

```csharp
private DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement">Requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.conditions"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersConditionsList</a>

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.requirement"></a>

```csharp
public string Requirement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFilters">DataAwsccWafv2LoggingConfigurationLoggingFilterFilters</a>

---


### DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference <a name="DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.defaultBehavior"></a>

```csharp
public string DefaultBehavior { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.filters"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList">DataAwsccWafv2LoggingConfigurationLoggingFilterFiltersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationLoggingFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationLoggingFilter">DataAwsccWafv2LoggingConfigurationLoggingFilter</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsList <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsList" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationRedactedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get"></a>

```csharp
private DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath">UriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `SingleHeader`<sup>Required</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.singleHeader"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference SingleHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference</a>

---

##### `UriPath`<sup>Required</sup> <a name="UriPath" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.uriPath"></a>

```csharp
public string UriPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationRedactedFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFields">DataAwsccWafv2LoggingConfigurationRedactedFields</a>

---


### DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference <a name="DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWafv2LoggingConfiguration.DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader">DataAwsccWafv2LoggingConfigurationRedactedFieldsSingleHeader</a>

---



