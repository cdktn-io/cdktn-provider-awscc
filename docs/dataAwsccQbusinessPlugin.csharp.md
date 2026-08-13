# `dataAwsccQbusinessPlugin` Submodule <a name="`dataAwsccQbusinessPlugin` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessPlugin <a name="DataAwsccQbusinessPlugin" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_plugin awscc_qbusiness_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPlugin(Construct Scope, string Id, DataAwsccQbusinessPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig">DataAwsccQbusinessPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig">DataAwsccQbusinessPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessPlugin.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQbusinessPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQbusinessPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQbusinessPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQbusinessPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.authConfiguration">AuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.buildStatus">BuildStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.customPluginConfiguration">CustomPluginConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginArn">PluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginId">PluginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList">DataAwsccQbusinessPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `AuthConfiguration`<sup>Required</sup> <a name="AuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.authConfiguration"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfigurationOutputReference AuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOutputReference</a>

---

##### `BuildStatus`<sup>Required</sup> <a name="BuildStatus" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.buildStatus"></a>

```csharp
public string BuildStatus { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomPluginConfiguration`<sup>Required</sup> <a name="CustomPluginConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.customPluginConfiguration"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference CustomPluginConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `PluginArn`<sup>Required</sup> <a name="PluginArn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginArn"></a>

```csharp
public string PluginArn { get; }
```

- *Type:* string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.pluginId"></a>

```csharp
public string PluginId { get; }
```

- *Type:* string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tags"></a>

```csharp
public DataAwsccQbusinessPluginTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList">DataAwsccQbusinessPluginTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessPluginAuthConfiguration <a name="DataAwsccQbusinessPluginAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfiguration {

};
```


### DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration <a name="DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration {

};
```


### DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration <a name="DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration {

};
```


### DataAwsccQbusinessPluginConfig <a name="DataAwsccQbusinessPluginConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/qbusiness_plugin#id DataAwsccQbusinessPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessPluginCustomPluginConfiguration <a name="DataAwsccQbusinessPluginCustomPluginConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfiguration {

};
```


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema {

};
```


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 {

};
```


### DataAwsccQbusinessPluginTags <a name="DataAwsccQbusinessPluginTags" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfiguration</a>

---


### DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfiguration</a>

---


### DataAwsccQbusinessPluginAuthConfigurationOutputReference <a name="DataAwsccQbusinessPluginAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginAuthConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration">BasicAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration">NoAuthConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration">OAuth2ClientCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration">DataAwsccQbusinessPluginAuthConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuthConfiguration`<sup>Required</sup> <a name="BasicAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.basicAuthConfiguration"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference BasicAuthConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationBasicAuthConfigurationOutputReference</a>

---

##### `NoAuthConfiguration`<sup>Required</sup> <a name="NoAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.noAuthConfiguration"></a>

```csharp
public string NoAuthConfiguration { get; }
```

- *Type:* string

---

##### `OAuth2ClientCredentialConfiguration`<sup>Required</sup> <a name="OAuth2ClientCredentialConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.oAuth2ClientCredentialConfiguration"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference OAuth2ClientCredentialConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference">DataAwsccQbusinessPluginAuthConfigurationOAuth2ClientCredentialConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginAuthConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginAuthConfiguration">DataAwsccQbusinessPluginAuthConfiguration</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.s3"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchema</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaS3</a>

---


### DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference <a name="DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema">ApiSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType">ApiSchemaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration">DataAwsccQbusinessPluginCustomPluginConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiSchema`<sup>Required</sup> <a name="ApiSchema" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchema"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference ApiSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference">DataAwsccQbusinessPluginCustomPluginConfigurationApiSchemaOutputReference</a>

---

##### `ApiSchemaType`<sup>Required</sup> <a name="ApiSchemaType" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.apiSchemaType"></a>

```csharp
public string ApiSchemaType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginCustomPluginConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginCustomPluginConfiguration">DataAwsccQbusinessPluginCustomPluginConfiguration</a>

---


### DataAwsccQbusinessPluginTagsList <a name="DataAwsccQbusinessPluginTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get"></a>

```csharp
private DataAwsccQbusinessPluginTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQbusinessPluginTagsOutputReference <a name="DataAwsccQbusinessPluginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQbusinessPluginTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags">DataAwsccQbusinessPluginTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQbusinessPluginTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessPlugin.DataAwsccQbusinessPluginTags">DataAwsccQbusinessPluginTags</a>

---



