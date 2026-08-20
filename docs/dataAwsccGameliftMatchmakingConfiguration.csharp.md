# `dataAwsccGameliftMatchmakingConfiguration` Submodule <a name="`dataAwsccGameliftMatchmakingConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGameliftMatchmakingConfiguration <a name="DataAwsccGameliftMatchmakingConfiguration" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/gamelift_matchmaking_configuration awscc_gamelift_matchmaking_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfiguration(Construct Scope, string Id, DataAwsccGameliftMatchmakingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig">DataAwsccGameliftMatchmakingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig">DataAwsccGameliftMatchmakingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGameliftMatchmakingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGameliftMatchmakingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGameliftMatchmakingConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccGameliftMatchmakingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccGameliftMatchmakingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGameliftMatchmakingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGameliftMatchmakingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/gamelift_matchmaking_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGameliftMatchmakingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired">AcceptanceRequired</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds">AcceptanceTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount">AdditionalPlayerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode">BackfillMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData">CustomEventData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode">FlexMatchMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties">GameProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData">GameSessionData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns">GameSessionQueueArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget">NotificationTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds">RequestTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn">RuleSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName">RuleSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AcceptanceRequired`<sup>Required</sup> <a name="AcceptanceRequired" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceRequired"></a>

```csharp
public IResolvable AcceptanceRequired { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AcceptanceTimeoutSeconds`<sup>Required</sup> <a name="AcceptanceTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.acceptanceTimeoutSeconds"></a>

```csharp
public double AcceptanceTimeoutSeconds { get; }
```

- *Type:* double

---

##### `AdditionalPlayerCount`<sup>Required</sup> <a name="AdditionalPlayerCount" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.additionalPlayerCount"></a>

```csharp
public double AdditionalPlayerCount { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BackfillMode`<sup>Required</sup> <a name="BackfillMode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.backfillMode"></a>

```csharp
public string BackfillMode { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `CustomEventData`<sup>Required</sup> <a name="CustomEventData" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.customEventData"></a>

```csharp
public string CustomEventData { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FlexMatchMode`<sup>Required</sup> <a name="FlexMatchMode" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.flexMatchMode"></a>

```csharp
public string FlexMatchMode { get; }
```

- *Type:* string

---

##### `GameProperties`<sup>Required</sup> <a name="GameProperties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameProperties"></a>

```csharp
public DataAwsccGameliftMatchmakingConfigurationGamePropertiesList GameProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList">DataAwsccGameliftMatchmakingConfigurationGamePropertiesList</a>

---

##### `GameSessionData`<sup>Required</sup> <a name="GameSessionData" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionData"></a>

```csharp
public string GameSessionData { get; }
```

- *Type:* string

---

##### `GameSessionQueueArns`<sup>Required</sup> <a name="GameSessionQueueArns" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.gameSessionQueueArns"></a>

```csharp
public string[] GameSessionQueueArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.notificationTarget"></a>

```csharp
public string NotificationTarget { get; }
```

- *Type:* string

---

##### `RequestTimeoutSeconds`<sup>Required</sup> <a name="RequestTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.requestTimeoutSeconds"></a>

```csharp
public double RequestTimeoutSeconds { get; }
```

- *Type:* double

---

##### `RuleSetArn`<sup>Required</sup> <a name="RuleSetArn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetArn"></a>

```csharp
public string RuleSetArn { get; }
```

- *Type:* string

---

##### `RuleSetName`<sup>Required</sup> <a name="RuleSetName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.ruleSetName"></a>

```csharp
public string RuleSetName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tags"></a>

```csharp
public DataAwsccGameliftMatchmakingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList">DataAwsccGameliftMatchmakingConfigurationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGameliftMatchmakingConfigurationConfig <a name="DataAwsccGameliftMatchmakingConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/gamelift_matchmaking_configuration#id DataAwsccGameliftMatchmakingConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGameliftMatchmakingConfigurationGameProperties <a name="DataAwsccGameliftMatchmakingConfigurationGameProperties" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationGameProperties {

};
```


### DataAwsccGameliftMatchmakingConfigurationTags <a name="DataAwsccGameliftMatchmakingConfigurationTags" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGameliftMatchmakingConfigurationGamePropertiesList <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationGamePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get"></a>

```csharp
private DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGamePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGameliftMatchmakingConfigurationGameProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationGameProperties">DataAwsccGameliftMatchmakingConfigurationGameProperties</a>

---


### DataAwsccGameliftMatchmakingConfigurationTagsList <a name="DataAwsccGameliftMatchmakingConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get"></a>

```csharp
private DataAwsccGameliftMatchmakingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccGameliftMatchmakingConfigurationTagsOutputReference <a name="DataAwsccGameliftMatchmakingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccGameliftMatchmakingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccGameliftMatchmakingConfigurationTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGameliftMatchmakingConfiguration.DataAwsccGameliftMatchmakingConfigurationTags">DataAwsccGameliftMatchmakingConfigurationTags</a>

---



