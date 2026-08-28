# `dataAwsccQuicksightTopic` Submodule <a name="`dataAwsccQuicksightTopic` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTopic <a name="DataAwsccQuicksightTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_topic awscc_quicksight_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopic(Construct Scope, string Id, DataAwsccQuicksightTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig">DataAwsccQuicksightTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig">DataAwsccQuicksightTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightTopic resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.configOptions">ConfigOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference">DataAwsccQuicksightTopicConfigOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.customInstructions">CustomInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference">DataAwsccQuicksightTopicCustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList">DataAwsccQuicksightTopicDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.folderArns">FolderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList">DataAwsccQuicksightTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.userExperienceVersion">UserExperienceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `ConfigOptions`<sup>Required</sup> <a name="ConfigOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.configOptions"></a>

```csharp
public DataAwsccQuicksightTopicConfigOptionsOutputReference ConfigOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference">DataAwsccQuicksightTopicConfigOptionsOutputReference</a>

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.customInstructions"></a>

```csharp
public DataAwsccQuicksightTopicCustomInstructionsOutputReference CustomInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference">DataAwsccQuicksightTopicCustomInstructionsOutputReference</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.dataSets"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsList DataSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList">DataAwsccQuicksightTopicDataSetsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FolderArns`<sup>Required</sup> <a name="FolderArns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.folderArns"></a>

```csharp
public string[] FolderArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tags"></a>

```csharp
public DataAwsccQuicksightTopicTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList">DataAwsccQuicksightTopicTagsList</a>

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

##### `UserExperienceVersion`<sup>Required</sup> <a name="UserExperienceVersion" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.userExperienceVersion"></a>

```csharp
public string UserExperienceVersion { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightTopicConfig <a name="DataAwsccQuicksightTopicConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_topic#id DataAwsccQuicksightTopic#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightTopicConfigOptions <a name="DataAwsccQuicksightTopicConfigOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicConfigOptions {

};
```


### DataAwsccQuicksightTopicCustomInstructions <a name="DataAwsccQuicksightTopicCustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicCustomInstructions {

};
```


### DataAwsccQuicksightTopicDataSets <a name="DataAwsccQuicksightTopicDataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSets {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFields <a name="DataAwsccQuicksightTopicDataSetsCalculatedFields" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFields {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat {

};
```


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType {

};
```


### DataAwsccQuicksightTopicDataSetsColumns <a name="DataAwsccQuicksightTopicDataSetsColumns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumns {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder <a name="DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat {

};
```


### DataAwsccQuicksightTopicDataSetsColumnsSemanticType <a name="DataAwsccQuicksightTopicDataSetsColumnsSemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsSemanticType {

};
```


### DataAwsccQuicksightTopicDataSetsDataAggregation <a name="DataAwsccQuicksightTopicDataSetsDataAggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsDataAggregation {

};
```


### DataAwsccQuicksightTopicDataSetsFilters <a name="DataAwsccQuicksightTopicDataSetsFilters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFilters {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter {

};
```


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant {

};
```


### DataAwsccQuicksightTopicDataSetsNamedEntities <a name="DataAwsccQuicksightTopicDataSetsNamedEntities" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntities {

};
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition {

};
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric {

};
```


### DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType {

};
```


### DataAwsccQuicksightTopicTags <a name="DataAwsccQuicksightTopicTags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightTopicConfigOptionsOutputReference <a name="DataAwsccQuicksightTopicConfigOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicConfigOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.qBusinessInsightsEnabled">QBusinessInsightsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions">DataAwsccQuicksightTopicConfigOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QBusinessInsightsEnabled`<sup>Required</sup> <a name="QBusinessInsightsEnabled" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.qBusinessInsightsEnabled"></a>

```csharp
public IResolvable QBusinessInsightsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicConfigOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicConfigOptions">DataAwsccQuicksightTopicConfigOptions</a>

---


### DataAwsccQuicksightTopicCustomInstructionsOutputReference <a name="DataAwsccQuicksightTopicCustomInstructionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicCustomInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.customInstructionsString">CustomInstructionsString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions">DataAwsccQuicksightTopicCustomInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomInstructionsString`<sup>Required</sup> <a name="CustomInstructionsString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.customInstructionsString"></a>

```csharp
public string CustomInstructionsString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicCustomInstructions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicCustomInstructions">DataAwsccQuicksightTopicCustomInstructions</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.cellValue">CellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CellValue`<sup>Required</sup> <a name="CellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.cellValue"></a>

```csharp
public string CellValue { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonyms</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.specifedOrder">SpecifedOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues">TreatUndefinedSpecifiedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.useOrdering">UseOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecifedOrder`<sup>Required</sup> <a name="SpecifedOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.specifedOrder"></a>

```csharp
public string[] SpecifedOrder { get; }
```

- *Type:* string[]

---

##### `TreatUndefinedSpecifiedValues`<sup>Required</sup> <a name="TreatUndefinedSpecifiedValues" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues"></a>

```csharp
public string TreatUndefinedSpecifiedValues { get; }
```

- *Type:* string

---

##### `UseOrdering`<sup>Required</sup> <a name="UseOrdering" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.useOrdering"></a>

```csharp
public string UseOrdering { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrder</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormat</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat">BlankCellFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator">DecimalSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits">FractionDigits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator">GroupingSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat">NegativeFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler">UnitScaler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat">UseBlankCellFormat</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping">UseGrouping</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlankCellFormat`<sup>Required</sup> <a name="BlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat"></a>

```csharp
public string BlankCellFormat { get; }
```

- *Type:* string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol"></a>

```csharp
public string CurrencySymbol { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `DecimalSeparator`<sup>Required</sup> <a name="DecimalSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator"></a>

```csharp
public string DecimalSeparator { get; }
```

- *Type:* string

---

##### `FractionDigits`<sup>Required</sup> <a name="FractionDigits" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits"></a>

```csharp
public double FractionDigits { get; }
```

- *Type:* double

---

##### `GroupingSeparator`<sup>Required</sup> <a name="GroupingSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator"></a>

```csharp
public string GroupingSeparator { get; }
```

- *Type:* string

---

##### `NegativeFormat`<sup>Required</sup> <a name="NegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference NegativeFormat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `UnitScaler`<sup>Required</sup> <a name="UnitScaler" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler"></a>

```csharp
public string UnitScaler { get; }
```

- *Type:* string

---

##### `UseBlankCellFormat`<sup>Required</sup> <a name="UseBlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat"></a>

```csharp
public IResolvable UseBlankCellFormat { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseGrouping`<sup>Required</sup> <a name="UseGrouping" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping"></a>

```csharp
public IResolvable UseGrouping { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptions</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormat">DisplayFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormatOptions">DisplayFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayFormat`<sup>Required</sup> <a name="DisplayFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormat"></a>

```csharp
public string DisplayFormat { get; }
```

- *Type:* string

---

##### `DisplayFormatOptions`<sup>Required</sup> <a name="DisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.displayFormatOptions"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference DisplayFormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingDisplayFormatOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormatting</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsList <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.allowedAggregations">AllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldDescription">CalculatedFieldDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldName">CalculatedFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldSynonyms">CalculatedFieldSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.cellValueSynonyms">CellValueSynonyms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.columnDataRole">ColumnDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.comparativeOrder">ComparativeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.defaultFormatting">DefaultFormatting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.disableIndexing">DisableIndexing</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.isIncludedInTopic">IsIncludedInTopic</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.neverAggregateInFilter">NeverAggregateInFilter</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.nonAdditive">NonAdditive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.notAllowedAggregations">NotAllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.semanticType">SemanticType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.timeGranularity">TimeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields">DataAwsccQuicksightTopicDataSetsCalculatedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `AllowedAggregations`<sup>Required</sup> <a name="AllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.allowedAggregations"></a>

```csharp
public string[] AllowedAggregations { get; }
```

- *Type:* string[]

---

##### `CalculatedFieldDescription`<sup>Required</sup> <a name="CalculatedFieldDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldDescription"></a>

```csharp
public string CalculatedFieldDescription { get; }
```

- *Type:* string

---

##### `CalculatedFieldName`<sup>Required</sup> <a name="CalculatedFieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldName"></a>

```csharp
public string CalculatedFieldName { get; }
```

- *Type:* string

---

##### `CalculatedFieldSynonyms`<sup>Required</sup> <a name="CalculatedFieldSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.calculatedFieldSynonyms"></a>

```csharp
public string[] CalculatedFieldSynonyms { get; }
```

- *Type:* string[]

---

##### `CellValueSynonyms`<sup>Required</sup> <a name="CellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.cellValueSynonyms"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList CellValueSynonyms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsCellValueSynonymsList</a>

---

##### `ColumnDataRole`<sup>Required</sup> <a name="ColumnDataRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.columnDataRole"></a>

```csharp
public string ColumnDataRole { get; }
```

- *Type:* string

---

##### `ComparativeOrder`<sup>Required</sup> <a name="ComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.comparativeOrder"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference ComparativeOrder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsComparativeOrderOutputReference</a>

---

##### `DefaultFormatting`<sup>Required</sup> <a name="DefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.defaultFormatting"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference DefaultFormatting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsDefaultFormattingOutputReference</a>

---

##### `DisableIndexing`<sup>Required</sup> <a name="DisableIndexing" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.disableIndexing"></a>

```csharp
public IResolvable DisableIndexing { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsIncludedInTopic`<sup>Required</sup> <a name="IsIncludedInTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.isIncludedInTopic"></a>

```csharp
public IResolvable IsIncludedInTopic { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NeverAggregateInFilter`<sup>Required</sup> <a name="NeverAggregateInFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.neverAggregateInFilter"></a>

```csharp
public IResolvable NeverAggregateInFilter { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NonAdditive`<sup>Required</sup> <a name="NonAdditive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.nonAdditive"></a>

```csharp
public IResolvable NonAdditive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NotAllowedAggregations`<sup>Required</sup> <a name="NotAllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.notAllowedAggregations"></a>

```csharp
public string[] NotAllowedAggregations { get; }
```

- *Type:* string[]

---

##### `SemanticType`<sup>Required</sup> <a name="SemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.semanticType"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference SemanticType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference</a>

---

##### `TimeGranularity`<sup>Required</sup> <a name="TimeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.timeGranularity"></a>

```csharp
public string TimeGranularity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFields">DataAwsccQuicksightTopicDataSetsCalculatedFields</a>

---


### DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValue">FalseyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValueSynonyms">FalseyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.subTypeName">SubTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValue">TruthyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValueSynonyms">TruthyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeParameters">TypeParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FalseyCellValue`<sup>Required</sup> <a name="FalseyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValue"></a>

```csharp
public string FalseyCellValue { get; }
```

- *Type:* string

---

##### `FalseyCellValueSynonyms`<sup>Required</sup> <a name="FalseyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.falseyCellValueSynonyms"></a>

```csharp
public string[] FalseyCellValueSynonyms { get; }
```

- *Type:* string[]

---

##### `SubTypeName`<sup>Required</sup> <a name="SubTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.subTypeName"></a>

```csharp
public string SubTypeName { get; }
```

- *Type:* string

---

##### `TruthyCellValue`<sup>Required</sup> <a name="TruthyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValue"></a>

```csharp
public string TruthyCellValue { get; }
```

- *Type:* string

---

##### `TruthyCellValueSynonyms`<sup>Required</sup> <a name="TruthyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.truthyCellValueSynonyms"></a>

```csharp
public string[] TruthyCellValueSynonyms { get; }
```

- *Type:* string[]

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypeParameters`<sup>Required</sup> <a name="TypeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.typeParameters"></a>

```csharp
public StringMap TypeParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType">DataAwsccQuicksightTopicDataSetsCalculatedFieldsSemanticType</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.cellValue">CellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.synonyms">Synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CellValue`<sup>Required</sup> <a name="CellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.cellValue"></a>

```csharp
public string CellValue { get; }
```

- *Type:* string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.synonyms"></a>

```csharp
public string[] Synonyms { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonyms</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.specifedOrder">SpecifedOrder</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues">TreatUndefinedSpecifiedValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.useOrdering">UseOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecifedOrder`<sup>Required</sup> <a name="SpecifedOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.specifedOrder"></a>

```csharp
public string[] SpecifedOrder { get; }
```

- *Type:* string[]

---

##### `TreatUndefinedSpecifiedValues`<sup>Required</sup> <a name="TreatUndefinedSpecifiedValues" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.treatUndefinedSpecifiedValues"></a>

```csharp
public string TreatUndefinedSpecifiedValues { get; }
```

- *Type:* string

---

##### `UseOrdering`<sup>Required</sup> <a name="UseOrdering" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.useOrdering"></a>

```csharp
public string UseOrdering { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrder</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormat</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat">BlankCellFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol">CurrencySymbol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat">DateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator">DecimalSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits">FractionDigits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator">GroupingSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat">NegativeFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler">UnitScaler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat">UseBlankCellFormat</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping">UseGrouping</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlankCellFormat`<sup>Required</sup> <a name="BlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.blankCellFormat"></a>

```csharp
public string BlankCellFormat { get; }
```

- *Type:* string

---

##### `CurrencySymbol`<sup>Required</sup> <a name="CurrencySymbol" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.currencySymbol"></a>

```csharp
public string CurrencySymbol { get; }
```

- *Type:* string

---

##### `DateFormat`<sup>Required</sup> <a name="DateFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.dateFormat"></a>

```csharp
public string DateFormat { get; }
```

- *Type:* string

---

##### `DecimalSeparator`<sup>Required</sup> <a name="DecimalSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.decimalSeparator"></a>

```csharp
public string DecimalSeparator { get; }
```

- *Type:* string

---

##### `FractionDigits`<sup>Required</sup> <a name="FractionDigits" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.fractionDigits"></a>

```csharp
public double FractionDigits { get; }
```

- *Type:* double

---

##### `GroupingSeparator`<sup>Required</sup> <a name="GroupingSeparator" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.groupingSeparator"></a>

```csharp
public string GroupingSeparator { get; }
```

- *Type:* string

---

##### `NegativeFormat`<sup>Required</sup> <a name="NegativeFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.negativeFormat"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference NegativeFormat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsNegativeFormatOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `UnitScaler`<sup>Required</sup> <a name="UnitScaler" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.unitScaler"></a>

```csharp
public string UnitScaler { get; }
```

- *Type:* string

---

##### `UseBlankCellFormat`<sup>Required</sup> <a name="UseBlankCellFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useBlankCellFormat"></a>

```csharp
public IResolvable UseBlankCellFormat { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseGrouping`<sup>Required</sup> <a name="UseGrouping" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.useGrouping"></a>

```csharp
public IResolvable UseGrouping { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptions</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormat">DisplayFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormatOptions">DisplayFormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayFormat`<sup>Required</sup> <a name="DisplayFormat" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormat"></a>

```csharp
public string DisplayFormat { get; }
```

- *Type:* string

---

##### `DisplayFormatOptions`<sup>Required</sup> <a name="DisplayFormatOptions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.displayFormatOptions"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference DisplayFormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingDisplayFormatOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormatting</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsList <a name="DataAwsccQuicksightTopicDataSetsColumnsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsColumnsOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.allowedAggregations">AllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.cellValueSynonyms">CellValueSynonyms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDataRole">ColumnDataRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDescription">ColumnDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnFriendlyName">ColumnFriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnSynonyms">ColumnSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.comparativeOrder">ComparativeOrder</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.defaultFormatting">DefaultFormatting</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.disableIndexing">DisableIndexing</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.isIncludedInTopic">IsIncludedInTopic</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.neverAggregateInFilter">NeverAggregateInFilter</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.nonAdditive">NonAdditive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.notAllowedAggregations">NotAllowedAggregations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.semanticType">SemanticType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.timeGranularity">TimeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns">DataAwsccQuicksightTopicDataSetsColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `AllowedAggregations`<sup>Required</sup> <a name="AllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.allowedAggregations"></a>

```csharp
public string[] AllowedAggregations { get; }
```

- *Type:* string[]

---

##### `CellValueSynonyms`<sup>Required</sup> <a name="CellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.cellValueSynonyms"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList CellValueSynonyms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList">DataAwsccQuicksightTopicDataSetsColumnsCellValueSynonymsList</a>

---

##### `ColumnDataRole`<sup>Required</sup> <a name="ColumnDataRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDataRole"></a>

```csharp
public string ColumnDataRole { get; }
```

- *Type:* string

---

##### `ColumnDescription`<sup>Required</sup> <a name="ColumnDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnDescription"></a>

```csharp
public string ColumnDescription { get; }
```

- *Type:* string

---

##### `ColumnFriendlyName`<sup>Required</sup> <a name="ColumnFriendlyName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnFriendlyName"></a>

```csharp
public string ColumnFriendlyName { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnSynonyms`<sup>Required</sup> <a name="ColumnSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.columnSynonyms"></a>

```csharp
public string[] ColumnSynonyms { get; }
```

- *Type:* string[]

---

##### `ComparativeOrder`<sup>Required</sup> <a name="ComparativeOrder" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.comparativeOrder"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference ComparativeOrder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference">DataAwsccQuicksightTopicDataSetsColumnsComparativeOrderOutputReference</a>

---

##### `DefaultFormatting`<sup>Required</sup> <a name="DefaultFormatting" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.defaultFormatting"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference DefaultFormatting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference">DataAwsccQuicksightTopicDataSetsColumnsDefaultFormattingOutputReference</a>

---

##### `DisableIndexing`<sup>Required</sup> <a name="DisableIndexing" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.disableIndexing"></a>

```csharp
public IResolvable DisableIndexing { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsIncludedInTopic`<sup>Required</sup> <a name="IsIncludedInTopic" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.isIncludedInTopic"></a>

```csharp
public IResolvable IsIncludedInTopic { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NeverAggregateInFilter`<sup>Required</sup> <a name="NeverAggregateInFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.neverAggregateInFilter"></a>

```csharp
public IResolvable NeverAggregateInFilter { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NonAdditive`<sup>Required</sup> <a name="NonAdditive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.nonAdditive"></a>

```csharp
public IResolvable NonAdditive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NotAllowedAggregations`<sup>Required</sup> <a name="NotAllowedAggregations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.notAllowedAggregations"></a>

```csharp
public string[] NotAllowedAggregations { get; }
```

- *Type:* string[]

---

##### `SemanticType`<sup>Required</sup> <a name="SemanticType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.semanticType"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference SemanticType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference">DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference</a>

---

##### `TimeGranularity`<sup>Required</sup> <a name="TimeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.timeGranularity"></a>

```csharp
public string TimeGranularity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumns">DataAwsccQuicksightTopicDataSetsColumns</a>

---


### DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValue">FalseyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValueSynonyms">FalseyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.subTypeName">SubTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValue">TruthyCellValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValueSynonyms">TruthyCellValueSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeParameters">TypeParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType">DataAwsccQuicksightTopicDataSetsColumnsSemanticType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FalseyCellValue`<sup>Required</sup> <a name="FalseyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValue"></a>

```csharp
public string FalseyCellValue { get; }
```

- *Type:* string

---

##### `FalseyCellValueSynonyms`<sup>Required</sup> <a name="FalseyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.falseyCellValueSynonyms"></a>

```csharp
public string[] FalseyCellValueSynonyms { get; }
```

- *Type:* string[]

---

##### `SubTypeName`<sup>Required</sup> <a name="SubTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.subTypeName"></a>

```csharp
public string SubTypeName { get; }
```

- *Type:* string

---

##### `TruthyCellValue`<sup>Required</sup> <a name="TruthyCellValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValue"></a>

```csharp
public string TruthyCellValue { get; }
```

- *Type:* string

---

##### `TruthyCellValueSynonyms`<sup>Required</sup> <a name="TruthyCellValueSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.truthyCellValueSynonyms"></a>

```csharp
public string[] TruthyCellValueSynonyms { get; }
```

- *Type:* string[]

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypeParameters`<sup>Required</sup> <a name="TypeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.typeParameters"></a>

```csharp
public StringMap TypeParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsSemanticType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsSemanticType">DataAwsccQuicksightTopicDataSetsColumnsSemanticType</a>

---


### DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference <a name="DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.datasetRowDateGranularity">DatasetRowDateGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.defaultDateColumnName">DefaultDateColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation">DataAwsccQuicksightTopicDataSetsDataAggregation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetRowDateGranularity`<sup>Required</sup> <a name="DatasetRowDateGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.datasetRowDateGranularity"></a>

```csharp
public string DatasetRowDateGranularity { get; }
```

- *Type:* string

---

##### `DefaultDateColumnName`<sup>Required</sup> <a name="DefaultDateColumnName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.defaultDateColumnName"></a>

```csharp
public string DefaultDateColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsDataAggregation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregation">DataAwsccQuicksightTopicDataSetsDataAggregation</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.valueList">ValueList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueList`<sup>Required</sup> <a name="ValueList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.valueList"></a>

```csharp
public string[] ValueList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.collectiveConstant">CollectiveConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.constantType">ConstantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.singularConstant">SingularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectiveConstant`<sup>Required</sup> <a name="CollectiveConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.collectiveConstant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference CollectiveConstant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantCollectiveConstantOutputReference</a>

---

##### `ConstantType`<sup>Required</sup> <a name="ConstantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.constantType"></a>

```csharp
public string ConstantType { get; }
```

- *Type:* string

---

##### `SingularConstant`<sup>Required</sup> <a name="SingularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.singularConstant"></a>

```csharp
public string SingularConstant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterFunction">CategoryFilterFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterType">CategoryFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.constant">Constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.inverse">Inverse</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryFilterFunction`<sup>Required</sup> <a name="CategoryFilterFunction" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterFunction"></a>

```csharp
public string CategoryFilterFunction { get; }
```

- *Type:* string

---

##### `CategoryFilterType`<sup>Required</sup> <a name="CategoryFilterType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.categoryFilterType"></a>

```csharp
public string CategoryFilterType { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.constant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference Constant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterConstantOutputReference</a>

---

##### `Inverse`<sup>Required</sup> <a name="Inverse" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.inverse"></a>

```csharp
public IResolvable Inverse { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.constantType">ConstantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.rangeConstant">RangeConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantType`<sup>Required</sup> <a name="ConstantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.constantType"></a>

```csharp
public string ConstantType { get; }
```

- *Type:* string

---

##### `RangeConstant`<sup>Required</sup> <a name="RangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.rangeConstant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference RangeConstant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantRangeConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.constant">Constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.inclusive">Inclusive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.constant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference Constant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterConstantOutputReference</a>

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.inclusive"></a>

```csharp
public IResolvable Inclusive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersList <a name="DataAwsccQuicksightTopicDataSetsFiltersList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.constantType">ConstantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.singularConstant">SingularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantType`<sup>Required</sup> <a name="ConstantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.constantType"></a>

```csharp
public string ConstantType { get; }
```

- *Type:* string

---

##### `SingularConstant`<sup>Required</sup> <a name="SingularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.singularConstant"></a>

```csharp
public string SingularConstant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.constant">Constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.constant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference Constant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterConstantOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.constantType">ConstantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.rangeConstant">RangeConstant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantType`<sup>Required</sup> <a name="ConstantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.constantType"></a>

```csharp
public string ConstantType { get; }
```

- *Type:* string

---

##### `RangeConstant`<sup>Required</sup> <a name="RangeConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.rangeConstant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference RangeConstant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantRangeConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.constant">Constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.inclusive">Inclusive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.constant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference Constant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterConstantOutputReference</a>

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.inclusive"></a>

```csharp
public IResolvable Inclusive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilter</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.categoryFilter">CategoryFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.dateRangeFilter">DateRangeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterClass">FilterClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterDescription">FilterDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterName">FilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterSynonyms">FilterSynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericEqualityFilter">NumericEqualityFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericRangeFilter">NumericRangeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.operandFieldName">OperandFieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.relativeDateFilter">RelativeDateFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters">DataAwsccQuicksightTopicDataSetsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryFilter`<sup>Required</sup> <a name="CategoryFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.categoryFilter"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference CategoryFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersCategoryFilterOutputReference</a>

---

##### `DateRangeFilter`<sup>Required</sup> <a name="DateRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.dateRangeFilter"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference DateRangeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersDateRangeFilterOutputReference</a>

---

##### `FilterClass`<sup>Required</sup> <a name="FilterClass" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterClass"></a>

```csharp
public string FilterClass { get; }
```

- *Type:* string

---

##### `FilterDescription`<sup>Required</sup> <a name="FilterDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterDescription"></a>

```csharp
public string FilterDescription { get; }
```

- *Type:* string

---

##### `FilterName`<sup>Required</sup> <a name="FilterName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterName"></a>

```csharp
public string FilterName { get; }
```

- *Type:* string

---

##### `FilterSynonyms`<sup>Required</sup> <a name="FilterSynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterSynonyms"></a>

```csharp
public string[] FilterSynonyms { get; }
```

- *Type:* string[]

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `NumericEqualityFilter`<sup>Required</sup> <a name="NumericEqualityFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericEqualityFilter"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference NumericEqualityFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericEqualityFilterOutputReference</a>

---

##### `NumericRangeFilter`<sup>Required</sup> <a name="NumericRangeFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.numericRangeFilter"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference NumericRangeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersNumericRangeFilterOutputReference</a>

---

##### `OperandFieldName`<sup>Required</sup> <a name="OperandFieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.operandFieldName"></a>

```csharp
public string OperandFieldName { get; }
```

- *Type:* string

---

##### `RelativeDateFilter`<sup>Required</sup> <a name="RelativeDateFilter" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.relativeDateFilter"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference RelativeDateFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFilters">DataAwsccQuicksightTopicDataSetsFilters</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.constantType">ConstantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.singularConstant">SingularConstant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantType`<sup>Required</sup> <a name="ConstantType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.constantType"></a>

```csharp
public string ConstantType { get; }
```

- *Type:* string

---

##### `SingularConstant`<sup>Required</sup> <a name="SingularConstant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.singularConstant"></a>

```csharp
public string SingularConstant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstant</a>

---


### DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference <a name="DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.constant">Constant</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.relativeDateFilterFunction">RelativeDateFilterFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.timeGranularity">TimeGranularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.constant"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference Constant { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterConstantOutputReference</a>

---

##### `RelativeDateFilterFunction`<sup>Required</sup> <a name="RelativeDateFilterFunction" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.relativeDateFilterFunction"></a>

```csharp
public string RelativeDateFilterFunction { get; }
```

- *Type:* string

---

##### `TimeGranularity`<sup>Required</sup> <a name="TimeGranularity" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.timeGranularity"></a>

```csharp
public string TimeGranularity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter">DataAwsccQuicksightTopicDataSetsFiltersRelativeDateFilter</a>

---


### DataAwsccQuicksightTopicDataSetsList <a name="DataAwsccQuicksightTopicDataSetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregationFunctionParameters">AggregationFunctionParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `AggregationFunctionParameters`<sup>Required</sup> <a name="AggregationFunctionParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.aggregationFunctionParameters"></a>

```csharp
public StringMap AggregationFunctionParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetric</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyName">PropertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyRole">PropertyRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyUsage">PropertyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.metric"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionMetricOutputReference</a>

---

##### `PropertyName`<sup>Required</sup> <a name="PropertyName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyName"></a>

```csharp
public string PropertyName { get; }
```

- *Type:* string

---

##### `PropertyRole`<sup>Required</sup> <a name="PropertyRole" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyRole"></a>

```csharp
public string PropertyRole { get; }
```

- *Type:* string

---

##### `PropertyUsage`<sup>Required</sup> <a name="PropertyUsage" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.propertyUsage"></a>

```csharp
public string PropertyUsage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinition</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesList <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get"></a>

```csharp
private DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityDescription">EntityDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entitySynonyms">EntitySynonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.semanticEntityType">SemanticEntityType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities">DataAwsccQuicksightTopicDataSetsNamedEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.definition"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList">DataAwsccQuicksightTopicDataSetsNamedEntitiesDefinitionList</a>

---

##### `EntityDescription`<sup>Required</sup> <a name="EntityDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityDescription"></a>

```csharp
public string EntityDescription { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `EntitySynonyms`<sup>Required</sup> <a name="EntitySynonyms" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.entitySynonyms"></a>

```csharp
public string[] EntitySynonyms { get; }
```

- *Type:* string[]

---

##### `SemanticEntityType`<sup>Required</sup> <a name="SemanticEntityType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.semanticEntityType"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference SemanticEntityType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntities">DataAwsccQuicksightTopicDataSetsNamedEntities</a>

---


### DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference <a name="DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.subTypeName">SubTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeParameters">TypeParameters</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubTypeName`<sup>Required</sup> <a name="SubTypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.subTypeName"></a>

```csharp
public string SubTypeName { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypeParameters`<sup>Required</sup> <a name="TypeParameters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.typeParameters"></a>

```csharp
public StringMap TypeParameters { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType">DataAwsccQuicksightTopicDataSetsNamedEntitiesSemanticEntityType</a>

---


### DataAwsccQuicksightTopicDataSetsOutputReference <a name="DataAwsccQuicksightTopicDataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicDataSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.calculatedFields">CalculatedFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList">DataAwsccQuicksightTopicDataSetsColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.dataAggregation">DataAggregation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference">DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetArn">DatasetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetDescription">DatasetDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList">DataAwsccQuicksightTopicDataSetsFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.namedEntities">NamedEntities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList">DataAwsccQuicksightTopicDataSetsNamedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets">DataAwsccQuicksightTopicDataSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CalculatedFields`<sup>Required</sup> <a name="CalculatedFields" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.calculatedFields"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsCalculatedFieldsList CalculatedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsCalculatedFieldsList">DataAwsccQuicksightTopicDataSetsCalculatedFieldsList</a>

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.columns"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsColumnsList">DataAwsccQuicksightTopicDataSetsColumnsList</a>

---

##### `DataAggregation`<sup>Required</sup> <a name="DataAggregation" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.dataAggregation"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference DataAggregation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference">DataAwsccQuicksightTopicDataSetsDataAggregationOutputReference</a>

---

##### `DatasetArn`<sup>Required</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetArn"></a>

```csharp
public string DatasetArn { get; }
```

- *Type:* string

---

##### `DatasetDescription`<sup>Required</sup> <a name="DatasetDescription" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetDescription"></a>

```csharp
public string DatasetDescription { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.filters"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsFiltersList">DataAwsccQuicksightTopicDataSetsFiltersList</a>

---

##### `NamedEntities`<sup>Required</sup> <a name="NamedEntities" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.namedEntities"></a>

```csharp
public DataAwsccQuicksightTopicDataSetsNamedEntitiesList NamedEntities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsNamedEntitiesList">DataAwsccQuicksightTopicDataSetsNamedEntitiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicDataSets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicDataSets">DataAwsccQuicksightTopicDataSets</a>

---


### DataAwsccQuicksightTopicTagsList <a name="DataAwsccQuicksightTopicTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get"></a>

```csharp
private DataAwsccQuicksightTopicTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicTagsOutputReference <a name="DataAwsccQuicksightTopicTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags">DataAwsccQuicksightTopicTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopic.DataAwsccQuicksightTopicTags">DataAwsccQuicksightTopicTags</a>

---



