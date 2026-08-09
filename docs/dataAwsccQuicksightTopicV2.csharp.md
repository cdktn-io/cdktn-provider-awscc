# `dataAwsccQuicksightTopicV2` Submodule <a name="`dataAwsccQuicksightTopicV2` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTopicV2 <a name="DataAwsccQuicksightTopicV2" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2 awscc_quicksight_topic_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2(Construct Scope, string Id, DataAwsccQuicksightTopicV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config">DataAwsccQuicksightTopicV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config">DataAwsccQuicksightTopicV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTopicV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopicV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopicV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopicV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightTopicV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightTopicV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightTopicV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightTopicV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTopicV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.customInstructions">CustomInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference">DataAwsccQuicksightTopicV2CustomInstructionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSetRelations">DataSetRelations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList">DataAwsccQuicksightTopicV2DataSetRelationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList">DataAwsccQuicksightTopicV2DataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.folderArns">FolderArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList">DataAwsccQuicksightTopicV2PermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList">DataAwsccQuicksightTopicV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `CustomInstructions`<sup>Required</sup> <a name="CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.customInstructions"></a>

```csharp
public DataAwsccQuicksightTopicV2CustomInstructionsOutputReference CustomInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference">DataAwsccQuicksightTopicV2CustomInstructionsOutputReference</a>

---

##### `DataSetRelations`<sup>Required</sup> <a name="DataSetRelations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSetRelations"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelationsList DataSetRelations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList">DataAwsccQuicksightTopicV2DataSetRelationsList</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.dataSets"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetsList DataSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList">DataAwsccQuicksightTopicV2DataSetsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FolderArns`<sup>Required</sup> <a name="FolderArns" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.folderArns"></a>

```csharp
public string[] FolderArns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.permissions"></a>

```csharp
public DataAwsccQuicksightTopicV2PermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList">DataAwsccQuicksightTopicV2PermissionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tags"></a>

```csharp
public DataAwsccQuicksightTopicV2TagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList">DataAwsccQuicksightTopicV2TagsList</a>

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightTopicV2Config <a name="DataAwsccQuicksightTopicV2Config" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2Config {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_topic_v2#id DataAwsccQuicksightTopicV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightTopicV2CustomInstructions <a name="DataAwsccQuicksightTopicV2CustomInstructions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2CustomInstructions {

};
```


### DataAwsccQuicksightTopicV2DataSetRelations <a name="DataAwsccQuicksightTopicV2DataSetRelations" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelations {

};
```


### DataAwsccQuicksightTopicV2DataSetRelationsLeft <a name="DataAwsccQuicksightTopicV2DataSetRelationsLeft" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsLeft {

};
```


### DataAwsccQuicksightTopicV2DataSetRelationsRight <a name="DataAwsccQuicksightTopicV2DataSetRelationsRight" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsRight {

};
```


### DataAwsccQuicksightTopicV2DataSets <a name="DataAwsccQuicksightTopicV2DataSets" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSets {

};
```


### DataAwsccQuicksightTopicV2Permissions <a name="DataAwsccQuicksightTopicV2Permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2Permissions {

};
```


### DataAwsccQuicksightTopicV2Tags <a name="DataAwsccQuicksightTopicV2Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2Tags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightTopicV2CustomInstructionsOutputReference <a name="DataAwsccQuicksightTopicV2CustomInstructionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2CustomInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString">CustomInstructionsString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions">DataAwsccQuicksightTopicV2CustomInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomInstructionsString`<sup>Required</sup> <a name="CustomInstructionsString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.customInstructionsString"></a>

```csharp
public string CustomInstructionsString { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2CustomInstructions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2CustomInstructions">DataAwsccQuicksightTopicV2CustomInstructions</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft">DataAwsccQuicksightTopicV2DataSetRelationsLeft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelationsLeft InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeft">DataAwsccQuicksightTopicV2DataSetRelationsLeft</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsList <a name="DataAwsccQuicksightTopicV2DataSetRelationsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get"></a>

```csharp
private DataAwsccQuicksightTopicV2DataSetRelationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicV2DataSetRelationsOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.left">Left</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.right">Right</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations">DataAwsccQuicksightTopicV2DataSetRelations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Left`<sup>Required</sup> <a name="Left" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.left"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference Left { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsLeftOutputReference</a>

---

##### `Right`<sup>Required</sup> <a name="Right" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.right"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference Right { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference">DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelations">DataAwsccQuicksightTopicV2DataSetRelations</a>

---


### DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference <a name="DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight">DataAwsccQuicksightTopicV2DataSetRelationsRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRightOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSetRelationsRight InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetRelationsRight">DataAwsccQuicksightTopicV2DataSetRelationsRight</a>

---


### DataAwsccQuicksightTopicV2DataSetsList <a name="DataAwsccQuicksightTopicV2DataSetsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get"></a>

```csharp
private DataAwsccQuicksightTopicV2DataSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicV2DataSetsOutputReference <a name="DataAwsccQuicksightTopicV2DataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2DataSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetName">DataSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets">DataAwsccQuicksightTopicV2DataSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `DataSetName`<sup>Required</sup> <a name="DataSetName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.dataSetName"></a>

```csharp
public string DataSetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSetsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2DataSets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2DataSets">DataAwsccQuicksightTopicV2DataSets</a>

---


### DataAwsccQuicksightTopicV2PermissionsList <a name="DataAwsccQuicksightTopicV2PermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2PermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get"></a>

```csharp
private DataAwsccQuicksightTopicV2PermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicV2PermissionsOutputReference <a name="DataAwsccQuicksightTopicV2PermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2PermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions">DataAwsccQuicksightTopicV2Permissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2PermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2Permissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Permissions">DataAwsccQuicksightTopicV2Permissions</a>

---


### DataAwsccQuicksightTopicV2TagsList <a name="DataAwsccQuicksightTopicV2TagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get"></a>

```csharp
private DataAwsccQuicksightTopicV2TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightTopicV2TagsOutputReference <a name="DataAwsccQuicksightTopicV2TagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightTopicV2TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags">DataAwsccQuicksightTopicV2Tags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2TagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightTopicV2Tags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTopicV2.DataAwsccQuicksightTopicV2Tags">DataAwsccQuicksightTopicV2Tags</a>

---



