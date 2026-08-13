# `dataAwsccKafkaconnectCustomPlugin` Submodule <a name="`dataAwsccKafkaconnectCustomPlugin` Submodule" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKafkaconnectCustomPlugin <a name="DataAwsccKafkaconnectCustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin awscc_kafkaconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPlugin(Construct Scope, string Id, DataAwsccKafkaconnectCustomPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig">DataAwsccKafkaconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig">DataAwsccKafkaconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectCustomPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectCustomPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectCustomPlugin.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectCustomPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccKafkaconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKafkaconnectCustomPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKafkaconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKafkaconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.customPluginArn">CustomPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fileDescription">FileDescription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference">DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList">DataAwsccKafkaconnectCustomPluginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.customPluginArn"></a>

```csharp
public string CustomPluginArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FileDescription`<sup>Required</sup> <a name="FileDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.fileDescription"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference FileDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference">DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.location"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tags"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList">DataAwsccKafkaconnectCustomPluginTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKafkaconnectCustomPluginConfig <a name="DataAwsccKafkaconnectCustomPluginConfig" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kafkaconnect_custom_plugin#id DataAwsccKafkaconnectCustomPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKafkaconnectCustomPluginFileDescription <a name="DataAwsccKafkaconnectCustomPluginFileDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginFileDescription {

};
```


### DataAwsccKafkaconnectCustomPluginLocation <a name="DataAwsccKafkaconnectCustomPluginLocation" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginLocation {

};
```


### DataAwsccKafkaconnectCustomPluginLocationS3Location <a name="DataAwsccKafkaconnectCustomPluginLocationS3Location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginLocationS3Location {

};
```


### DataAwsccKafkaconnectCustomPluginTags <a name="DataAwsccKafkaconnectCustomPluginTags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference <a name="DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5">FileMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize">FileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription">DataAwsccKafkaconnectCustomPluginFileDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileMd5`<sup>Required</sup> <a name="FileMd5" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileMd5"></a>

```csharp
public string FileMd5 { get; }
```

- *Type:* string

---

##### `FileSize`<sup>Required</sup> <a name="FileSize" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.fileSize"></a>

```csharp
public double FileSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescriptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginFileDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginFileDescription">DataAwsccKafkaconnectCustomPluginFileDescription</a>

---


### DataAwsccKafkaconnectCustomPluginLocationOutputReference <a name="DataAwsccKafkaconnectCustomPluginLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation">DataAwsccKafkaconnectCustomPluginLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.s3Location"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference">DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocation">DataAwsccKafkaconnectCustomPluginLocation</a>

---


### DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference <a name="DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey">FileKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location">DataAwsccKafkaconnectCustomPluginLocationS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.fileKey"></a>

```csharp
public string FileKey { get; }
```

- *Type:* string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.objectVersion"></a>

```csharp
public string ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginLocationS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginLocationS3Location">DataAwsccKafkaconnectCustomPluginLocationS3Location</a>

---


### DataAwsccKafkaconnectCustomPluginTagsList <a name="DataAwsccKafkaconnectCustomPluginTagsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get"></a>

```csharp
private DataAwsccKafkaconnectCustomPluginTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKafkaconnectCustomPluginTagsOutputReference <a name="DataAwsccKafkaconnectCustomPluginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectCustomPluginTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags">DataAwsccKafkaconnectCustomPluginTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectCustomPluginTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectCustomPlugin.DataAwsccKafkaconnectCustomPluginTags">DataAwsccKafkaconnectCustomPluginTags</a>

---



