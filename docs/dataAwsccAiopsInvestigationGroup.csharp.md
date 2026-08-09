# `dataAwsccAiopsInvestigationGroup` Submodule <a name="`dataAwsccAiopsInvestigationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAiopsInvestigationGroup <a name="DataAwsccAiopsInvestigationGroup" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aiops_investigation_group awscc_aiops_investigation_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroup(Construct Scope, string Id, DataAwsccAiopsInvestigationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig">DataAwsccAiopsInvestigationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig">DataAwsccAiopsInvestigationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAiopsInvestigationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAiopsInvestigationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAiopsInvestigationGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAiopsInvestigationGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAiopsInvestigationGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAiopsInvestigationGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAiopsInvestigationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aiops_investigation_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAiopsInvestigationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels">ChatbotNotificationChannels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations">CrossAccountConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy">InvestigationGroupPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled">IsCloudTrailEventHistoryEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy">LastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries">TagKeyBoundaries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChatbotNotificationChannels`<sup>Required</sup> <a name="ChatbotNotificationChannels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.chatbotNotificationChannels"></a>

```csharp
public DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList ChatbotNotificationChannels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList">DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CrossAccountConfigurations`<sup>Required</sup> <a name="CrossAccountConfigurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.crossAccountConfigurations"></a>

```csharp
public DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList CrossAccountConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList">DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.encryptionConfig"></a>

```csharp
public DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference">DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference</a>

---

##### `InvestigationGroupPolicy`<sup>Required</sup> <a name="InvestigationGroupPolicy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.investigationGroupPolicy"></a>

```csharp
public string InvestigationGroupPolicy { get; }
```

- *Type:* string

---

##### `IsCloudTrailEventHistoryEnabled`<sup>Required</sup> <a name="IsCloudTrailEventHistoryEnabled" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.isCloudTrailEventHistoryEnabled"></a>

```csharp
public IResolvable IsCloudTrailEventHistoryEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.lastModifiedBy"></a>

```csharp
public string LastModifiedBy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `TagKeyBoundaries`<sup>Required</sup> <a name="TagKeyBoundaries" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tagKeyBoundaries"></a>

```csharp
public string[] TagKeyBoundaries { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tags"></a>

```csharp
public DataAwsccAiopsInvestigationGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList">DataAwsccAiopsInvestigationGroupTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannels <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannels" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupChatbotNotificationChannels {

};
```


### DataAwsccAiopsInvestigationGroupConfig <a name="DataAwsccAiopsInvestigationGroupConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aiops_investigation_group#id DataAwsccAiopsInvestigationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAiopsInvestigationGroupCrossAccountConfigurations <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurations" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupCrossAccountConfigurations {

};
```


### DataAwsccAiopsInvestigationGroupEncryptionConfig <a name="DataAwsccAiopsInvestigationGroupEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupEncryptionConfig {

};
```


### DataAwsccAiopsInvestigationGroupTags <a name="DataAwsccAiopsInvestigationGroupTags" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get"></a>

```csharp
private DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference <a name="DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns">ChatConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChatConfigurationArns`<sup>Required</sup> <a name="ChatConfigurationArns" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.chatConfigurationArns"></a>

```csharp
public string[] ChatConfigurationArns { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAiopsInvestigationGroupChatbotNotificationChannels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupChatbotNotificationChannels">DataAwsccAiopsInvestigationGroupChatbotNotificationChannels</a>

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get"></a>

```csharp
private DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference <a name="DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.sourceRoleArn"></a>

```csharp
public string SourceRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAiopsInvestigationGroupCrossAccountConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupCrossAccountConfigurations">DataAwsccAiopsInvestigationGroupCrossAccountConfigurations</a>

---


### DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference <a name="DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType">EncryptionConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationType`<sup>Required</sup> <a name="EncryptionConfigurationType" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.encryptionConfigurationType"></a>

```csharp
public string EncryptionConfigurationType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAiopsInvestigationGroupEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupEncryptionConfig">DataAwsccAiopsInvestigationGroupEncryptionConfig</a>

---


### DataAwsccAiopsInvestigationGroupTagsList <a name="DataAwsccAiopsInvestigationGroupTagsList" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get"></a>

```csharp
private DataAwsccAiopsInvestigationGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAiopsInvestigationGroupTagsOutputReference <a name="DataAwsccAiopsInvestigationGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAiopsInvestigationGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAiopsInvestigationGroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAiopsInvestigationGroup.DataAwsccAiopsInvestigationGroupTags">DataAwsccAiopsInvestigationGroupTags</a>

---



