# `dataAwsccElementalinferenceFeed` Submodule <a name="`dataAwsccElementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElementalinferenceFeed <a name="DataAwsccElementalinferenceFeed" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeed(Construct Scope, string Id, DataAwsccElementalinferenceFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig">DataAwsccElementalinferenceFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElementalinferenceFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElementalinferenceFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElementalinferenceFeed.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElementalinferenceFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElementalinferenceFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints">DataEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId">FeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs">Outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataEndpoints`<sup>Required</sup> <a name="DataEndpoints" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.dataEndpoints"></a>

```csharp
public string[] DataEndpoints { get; }
```

- *Type:* string[]

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.feedId"></a>

```csharp
public string FeedId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.outputs"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsList Outputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList">DataAwsccElementalinferenceFeedOutputsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElementalinferenceFeedConfig <a name="DataAwsccElementalinferenceFeedConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elementalinference_feed#id DataAwsccElementalinferenceFeed#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElementalinferenceFeedOutputs <a name="DataAwsccElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputs {

};
```


### DataAwsccElementalinferenceFeedOutputsOutputConfig <a name="DataAwsccElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfig {

};
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigClipping <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigClipping {

};
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling {

};
```


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElementalinferenceFeedOutputsList <a name="DataAwsccElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get"></a>

```csharp
private DataAwsccElementalinferenceFeedOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">CallbackMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CallbackMetadata`<sup>Required</sup> <a name="CallbackMetadata" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```csharp
public string CallbackMetadata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigClipping InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClipping">DataAwsccElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">Clipping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">Cropping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">Subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clipping`<sup>Required</sup> <a name="Clipping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference Clipping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `Cropping`<sup>Required</sup> <a name="Cropping" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```csharp
public string Cropping { get; }
```

- *Type:* string

---

##### `Subtitling`<sup>Required</sup> <a name="Subtitling" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference Subtitling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfig">DataAwsccElementalinferenceFeedOutputsOutputConfig</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">AspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">Dictionary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">ProfanityFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectRatio`<sup>Required</sup> <a name="AspectRatio" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference AspectRatio { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```csharp
public string Dictionary { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `ProfanityFilter`<sup>Required</sup> <a name="ProfanityFilter" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```csharp
public string ProfanityFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling">DataAwsccElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### DataAwsccElementalinferenceFeedOutputsOutputReference <a name="DataAwsccElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElementalinferenceFeedOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig">OutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputConfig`<sup>Required</sup> <a name="OutputConfig" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference OutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference">DataAwsccElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElementalinferenceFeedOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElementalinferenceFeed.DataAwsccElementalinferenceFeedOutputs">DataAwsccElementalinferenceFeedOutputs</a>

---



