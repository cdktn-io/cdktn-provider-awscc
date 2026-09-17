# `dataAwsccTranscribeCallAnalyticsCategory` Submodule <a name="`dataAwsccTranscribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTranscribeCallAnalyticsCategory <a name="DataAwsccTranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategory(Construct Scope, string Id, DataAwsccTranscribeCallAnalyticsCategoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig">DataAwsccTranscribeCallAnalyticsCategoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig">DataAwsccTranscribeCallAnalyticsCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTranscribeCallAnalyticsCategory.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTranscribeCallAnalyticsCategory.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTranscribeCallAnalyticsCategory.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTranscribeCallAnalyticsCategory.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTranscribeCallAnalyticsCategory to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.categoryName">CategoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.inputType">InputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList">DataAwsccTranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList">DataAwsccTranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.categoryName"></a>

```csharp
public string CategoryName { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.inputType"></a>

```csharp
public string InputType { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.rules"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList">DataAwsccTranscribeCallAnalyticsCategoryRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tags"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList">DataAwsccTranscribeCallAnalyticsCategoryTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTranscribeCallAnalyticsCategoryConfig <a name="DataAwsccTranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#id DataAwsccTranscribeCallAnalyticsCategory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTranscribeCallAnalyticsCategoryRules <a name="DataAwsccTranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRules {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {

};
```


### DataAwsccTranscribeCallAnalyticsCategoryTags <a name="DataAwsccTranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">Negate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```csharp
public IResolvable Negate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesList <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get"></a>

```csharp
private DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">Negate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```csharp
public IResolvable Negate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules">DataAwsccTranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterruptionFilter`<sup>Required</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference InterruptionFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `NonTalkTimeFilter`<sup>Required</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference NonTalkTimeFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `SentimentFilter`<sup>Required</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference SentimentFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `TranscriptFilter`<sup>Required</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference TranscriptFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules">DataAwsccTranscribeCallAnalyticsCategoryRules</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">Negate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">Sentiments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```csharp
public IResolvable Negate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `Sentiments`<sup>Required</sup> <a name="Sentiments" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```csharp
public string[] Sentiments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```csharp
public double EndTime { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```csharp
public double StartTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">Negate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference AbsoluteTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```csharp
public IResolvable Negate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```csharp
public string ParticipantRole { get; }
```

- *Type:* string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference RelativeTimeRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `TranscriptFilterType`<sup>Required</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```csharp
public string TranscriptFilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```csharp
public double EndPercentage { get; }
```

- *Type:* double

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```csharp
public double First { get; }
```

- *Type:* double

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```csharp
public double Last { get; }
```

- *Type:* double

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```csharp
public double StartPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryTagsList <a name="DataAwsccTranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get"></a>

```csharp
private DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags">DataAwsccTranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTranscribeCallAnalyticsCategoryTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags">DataAwsccTranscribeCallAnalyticsCategoryTags</a>

---



