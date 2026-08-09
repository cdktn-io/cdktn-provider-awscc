# `dataAwsccSesConfigurationSetEventDestination` Submodule <a name="`dataAwsccSesConfigurationSetEventDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesConfigurationSetEventDestination <a name="DataAwsccSesConfigurationSetEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_configuration_set_event_destination awscc_ses_configuration_set_event_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestination(Construct Scope, string Id, DataAwsccSesConfigurationSetEventDestinationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig">DataAwsccSesConfigurationSetEventDestinationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig">DataAwsccSesConfigurationSetEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesConfigurationSetEventDestination.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesConfigurationSetEventDestination.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesConfigurationSetEventDestination.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSesConfigurationSetEventDestination.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSesConfigurationSetEventDestination resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesConfigurationSetEventDestination to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesConfigurationSetEventDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesConfigurationSetEventDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId">ConfigurationSetEventDestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination">EventDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ConfigurationSetEventDestinationId`<sup>Required</sup> <a name="ConfigurationSetEventDestinationId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetEventDestinationId"></a>

```csharp
public string ConfigurationSetEventDestinationId { get; }
```

- *Type:* string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `EventDestination`<sup>Required</sup> <a name="EventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.eventDestination"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference EventDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestination.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesConfigurationSetEventDestinationConfig <a name="DataAwsccSesConfigurationSetEventDestinationConfig" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_configuration_set_event_destination#id DataAwsccSesConfigurationSetEventDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesConfigurationSetEventDestinationEventDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestination {

};
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination {

};
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations {

};
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination {

};
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {

};
```


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get"></a>

```csharp
private DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue">DefaultDimensionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName">DimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource">DimensionValueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultDimensionValue`<sup>Required</sup> <a name="DefaultDimensionValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.defaultDimensionValue"></a>

```csharp
public string DefaultDimensionValue { get; }
```

- *Type:* string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionName"></a>

```csharp
public string DimensionName { get; }
```

- *Type:* string

---

##### `DimensionValueSource`<sup>Required</sup> <a name="DimensionValueSource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.dimensionValueSource"></a>

```csharp
public string DimensionValueSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurations</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations">DimensionConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionConfigurations`<sup>Required</sup> <a name="DimensionConfigurations" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.dimensionConfigurations"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList DimensionConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationDimensionConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn">DeliveryStreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamArn`<sup>Required</sup> <a name="DeliveryStreamArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.deliveryStreamArn"></a>

```csharp
public string DeliveryStreamArn { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination">CloudwatchDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination">EventBridgeDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination">KinesisFirehoseDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes">MatchingEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination">SnsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchDestination`<sup>Required</sup> <a name="CloudwatchDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.cloudwatchDestination"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference CloudwatchDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationCloudwatchDestinationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EventBridgeDestination`<sup>Required</sup> <a name="EventBridgeDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.eventBridgeDestination"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference EventBridgeDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference</a>

---

##### `KinesisFirehoseDestination`<sup>Required</sup> <a name="KinesisFirehoseDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.kinesisFirehoseDestination"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference KinesisFirehoseDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference</a>

---

##### `MatchingEventTypes`<sup>Required</sup> <a name="MatchingEventTypes" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.matchingEventTypes"></a>

```csharp
public string[] MatchingEventTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnsDestination`<sup>Required</sup> <a name="SnsDestination" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.snsDestination"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference SnsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestination">DataAwsccSesConfigurationSetEventDestinationEventDestination</a>

---


### DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference <a name="DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSetEventDestination.DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination">DataAwsccSesConfigurationSetEventDestinationEventDestinationSnsDestination</a>

---



