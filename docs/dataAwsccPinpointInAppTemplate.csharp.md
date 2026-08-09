# `dataAwsccPinpointInAppTemplate` Submodule <a name="`dataAwsccPinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPinpointInAppTemplate <a name="DataAwsccPinpointInAppTemplate" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplate(Construct Scope, string Id, DataAwsccPinpointInAppTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig">DataAwsccPinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPinpointInAppTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPinpointInAppTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPinpointInAppTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccPinpointInAppTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccPinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPinpointInAppTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig">CustomConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout">Layout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription">TemplateDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.content"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentList Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList">DataAwsccPinpointInAppTemplateContentList</a>

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.customConfig"></a>

```csharp
public string CustomConfig { get; }
```

- *Type:* string

---

##### `Layout`<sup>Required</sup> <a name="Layout" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.layout"></a>

```csharp
public string Layout { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateDescription"></a>

```csharp
public string TemplateDescription { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPinpointInAppTemplateConfig <a name="DataAwsccPinpointInAppTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pinpoint_in_app_template#id DataAwsccPinpointInAppTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPinpointInAppTemplateContent <a name="DataAwsccPinpointInAppTemplateContent" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContent {

};
```


### DataAwsccPinpointInAppTemplateContentBodyConfig <a name="DataAwsccPinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentBodyConfig {

};
```


### DataAwsccPinpointInAppTemplateContentHeaderConfig <a name="DataAwsccPinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentHeaderConfig {

};
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtn <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtn {

};
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid {

};
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig {

};
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnIos {

};
```


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb {

};
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtn <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtn {

};
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid {

};
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig {

};
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIos <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnIos {

};
```


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">Alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```csharp
public string Alignment { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentBodyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfig">DataAwsccPinpointInAppTemplateContentBodyConfig</a>

---


### DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">Alignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```csharp
public string Alignment { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentHeaderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfig">DataAwsccPinpointInAppTemplateContentHeaderConfig</a>

---


### DataAwsccPinpointInAppTemplateContentList <a name="DataAwsccPinpointInAppTemplateContentList" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get"></a>

```csharp
private DataAwsccPinpointInAppTemplateContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccPinpointInAppTemplateContentOutputReference <a name="DataAwsccPinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `BodyConfig`<sup>Required</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference BodyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference">DataAwsccPinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `HeaderConfig`<sup>Required</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference HeaderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference">DataAwsccPinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `PrimaryBtn`<sup>Required</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference PrimaryBtn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `SecondaryBtn`<sup>Required</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference SecondaryBtn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContent">DataAwsccPinpointInAppTemplateContent</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```csharp
public double BorderRadius { get; }
```

- *Type:* double

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnIos InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIos">DataAwsccPinpointInAppTemplateContentPrimaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference Android { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference DefaultConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference Ios { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference Web { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtn">DataAwsccPinpointInAppTemplateContentPrimaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb">DataAwsccPinpointInAppTemplateContentPrimaryBtnWeb</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroid</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```csharp
public double BorderRadius { get; }
```

- *Type:* double

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnIos InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIos">DataAwsccPinpointInAppTemplateContentSecondaryBtnIos</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference Android { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference DefaultConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference Ios { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference Web { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference">DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtn">DataAwsccPinpointInAppTemplateContentSecondaryBtn</a>

---


### DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">Link</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```csharp
public string ButtonAction { get; }
```

- *Type:* string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```csharp
public string Link { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```csharp
public DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPinpointInAppTemplate.DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb">DataAwsccPinpointInAppTemplateContentSecondaryBtnWeb</a>

---



