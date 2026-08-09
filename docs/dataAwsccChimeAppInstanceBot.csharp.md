# `dataAwsccChimeAppInstanceBot` Submodule <a name="`dataAwsccChimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeAppInstanceBot <a name="DataAwsccChimeAppInstanceBot" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBot(Construct Scope, string Id, DataAwsccChimeAppInstanceBotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig">DataAwsccChimeAppInstanceBotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig">DataAwsccChimeAppInstanceBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeAppInstanceBot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeAppInstanceBot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeAppInstanceBot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeAppInstanceBot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeAppInstanceBot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn">AppInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn">AppInstanceBotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp">CreatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn"></a>

```csharp
public string AppInstanceArn { get; }
```

- *Type:* string

---

##### `AppInstanceBotArn`<sup>Required</sup> <a name="AppInstanceBotArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn"></a>

```csharp
public string AppInstanceBotArn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp"></a>

```csharp
public double CreatedTimestamp { get; }
```

- *Type:* double

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags"></a>

```csharp
public DataAwsccChimeAppInstanceBotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeAppInstanceBotConfig <a name="DataAwsccChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/chime_app_instance_bot#id DataAwsccChimeAppInstanceBot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeAppInstanceBotConfiguration <a name="DataAwsccChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfiguration {

};
```


### DataAwsccChimeAppInstanceBotConfigurationLex <a name="DataAwsccChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfigurationLex {

};
```


### DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy {

};
```


### DataAwsccChimeAppInstanceBotTags <a name="DataAwsccChimeAppInstanceBotTags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">StandardMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">TargetedMessages</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StandardMessages`<sup>Required</sup> <a name="StandardMessages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```csharp
public string StandardMessages { get; }
```

- *Type:* string

---

##### `TargetedMessages`<sup>Required</sup> <a name="TargetedMessages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```csharp
public string TargetedMessages { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### DataAwsccChimeAppInstanceBotConfigurationLexOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfigurationLexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">InvokedBy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">LexBotAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">LocaleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">RespondsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">WelcomeIntent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvokedBy`<sup>Required</sup> <a name="InvokedBy" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference InvokedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `LexBotAliasArn`<sup>Required</sup> <a name="LexBotAliasArn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```csharp
public string LexBotAliasArn { get; }
```

- *Type:* string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```csharp
public string LocaleId { get; }
```

- *Type:* string

---

##### `RespondsTo`<sup>Required</sup> <a name="RespondsTo" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```csharp
public string RespondsTo { get; }
```

- *Type:* string

---

##### `WelcomeIntent`<sup>Required</sup> <a name="WelcomeIntent" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```csharp
public string WelcomeIntent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfigurationLex InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a>

---


### DataAwsccChimeAppInstanceBotConfigurationOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex">Lex</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Lex`<sup>Required</sup> <a name="Lex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfigurationLexOutputReference Lex { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccChimeAppInstanceBotConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a>

---


### DataAwsccChimeAppInstanceBotTagsList <a name="DataAwsccChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get"></a>

```csharp
private DataAwsccChimeAppInstanceBotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccChimeAppInstanceBotTagsOutputReference <a name="DataAwsccChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeAppInstanceBotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccChimeAppInstanceBotTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a>

---



