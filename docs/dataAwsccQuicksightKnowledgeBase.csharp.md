# `dataAwsccQuicksightKnowledgeBase` Submodule <a name="`dataAwsccQuicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightKnowledgeBase <a name="DataAwsccQuicksightKnowledgeBase" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBase(Construct Scope, string Id, DataAwsccQuicksightKnowledgeBaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig">DataAwsccQuicksightKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig">DataAwsccQuicksightKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightKnowledgeBase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightKnowledgeBase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightKnowledgeBase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccQuicksightKnowledgeBase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccQuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightKnowledgeBase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration">AccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount">DocumentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">IsEmailNotificationOptedForIngestionFailures</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration">KnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">KnowledgeBaseSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn">PrimaryOwnerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername">PrimaryOwnerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccessControlConfiguration`<sup>Required</sup> <a name="AccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference AccessControlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentCount`<sup>Required</sup> <a name="DocumentCount" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.documentCount"></a>

```csharp
public double DocumentCount { get; }
```

- *Type:* double

---

##### `IsEmailNotificationOptedForIngestionFailures`<sup>Required</sup> <a name="IsEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```csharp
public IResolvable IsEmailNotificationOptedForIngestionFailures { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```csharp
public string KnowledgeBaseArn { get; }
```

- *Type:* string

---

##### `KnowledgeBaseConfiguration`<sup>Required</sup> <a name="KnowledgeBaseConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference KnowledgeBaseConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `KnowledgeBaseSizeBytes`<sup>Required</sup> <a name="KnowledgeBaseSizeBytes" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```csharp
public double KnowledgeBaseSizeBytes { get; }
```

- *Type:* double

---

##### `MediaExtractionConfiguration`<sup>Required</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference MediaExtractionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.permissions"></a>

```csharp
public DataAwsccQuicksightKnowledgeBasePermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList">DataAwsccQuicksightKnowledgeBasePermissionsList</a>

---

##### `PrimaryOwnerArn`<sup>Required</sup> <a name="PrimaryOwnerArn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```csharp
public string PrimaryOwnerArn { get; }
```

- *Type:* string

---

##### `PrimaryOwnerUsername`<sup>Required</sup> <a name="PrimaryOwnerUsername" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```csharp
public string PrimaryOwnerUsername { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tags"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList">DataAwsccQuicksightKnowledgeBaseTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseConfig <a name="DataAwsccQuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/quicksight_knowledge_base#id DataAwsccQuicksightKnowledgeBase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration {

};
```


### DataAwsccQuicksightKnowledgeBasePermissions <a name="DataAwsccQuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBasePermissions {

};
```


### DataAwsccQuicksightKnowledgeBaseTags <a name="DataAwsccQuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">IsAclEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsAclEnabled`<sup>Required</sup> <a name="IsAclEnabled" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```csharp
public IResolvable IsAclEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration">DataAwsccQuicksightKnowledgeBaseAccessControlConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference TemplateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">DataAwsccQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioExtractionStatus`<sup>Required</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```csharp
public string AudioExtractionStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageExtractionStatus`<sup>Required</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```csharp
public string ImageExtractionStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioExtractionConfiguration`<sup>Required</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference AudioExtractionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `ImageExtractionConfiguration`<sup>Required</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference ImageExtractionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `VideoExtractionConfiguration`<sup>Required</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference VideoExtractionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">VideoExtractionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VideoExtractionStatus`<sup>Required</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```csharp
public string VideoExtractionStatus { get; }
```

- *Type:* string

---

##### `VideoExtractionType`<sup>Required</sup> <a name="VideoExtractionType" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```csharp
public string VideoExtractionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">DataAwsccQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### DataAwsccQuicksightKnowledgeBasePermissionsList <a name="DataAwsccQuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBasePermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get"></a>

```csharp
private DataAwsccQuicksightKnowledgeBasePermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightKnowledgeBasePermissionsOutputReference <a name="DataAwsccQuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBasePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBasePermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBasePermissions">DataAwsccQuicksightKnowledgeBasePermissions</a>

---


### DataAwsccQuicksightKnowledgeBaseTagsList <a name="DataAwsccQuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get"></a>

```csharp
private DataAwsccQuicksightKnowledgeBaseTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccQuicksightKnowledgeBaseTagsOutputReference <a name="DataAwsccQuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccQuicksightKnowledgeBaseTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccQuicksightKnowledgeBaseTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightKnowledgeBase.DataAwsccQuicksightKnowledgeBaseTags">DataAwsccQuicksightKnowledgeBaseTags</a>

---



