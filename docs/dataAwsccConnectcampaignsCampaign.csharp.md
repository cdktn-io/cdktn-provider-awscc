# `dataAwsccConnectcampaignsCampaign` Submodule <a name="`dataAwsccConnectcampaignsCampaign` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectcampaignsCampaign <a name="DataAwsccConnectcampaignsCampaign" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connectcampaigns_campaign awscc_connectcampaigns_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaign(Construct Scope, string Id, DataAwsccConnectcampaignsCampaignConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig">DataAwsccConnectcampaignsCampaignConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig">DataAwsccConnectcampaignsCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectcampaignsCampaign.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectcampaignsCampaign.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectcampaignsCampaign.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccConnectcampaignsCampaign.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectcampaignsCampaign to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectcampaignsCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectcampaignsCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.connectInstanceArn">ConnectInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dialerConfig">DialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.outboundCallConfig">OutboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList">DataAwsccConnectcampaignsCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConnectInstanceArn`<sup>Required</sup> <a name="ConnectInstanceArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.connectInstanceArn"></a>

```csharp
public string ConnectInstanceArn { get; }
```

- *Type:* string

---

##### `DialerConfig`<sup>Required</sup> <a name="DialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.dialerConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigOutputReference DialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutboundCallConfig`<sup>Required</sup> <a name="OutboundCallConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.outboundCallConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference OutboundCallConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tags"></a>

```csharp
public DataAwsccConnectcampaignsCampaignTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList">DataAwsccConnectcampaignsCampaignTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaign.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectcampaignsCampaignConfig <a name="DataAwsccConnectcampaignsCampaignConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/connectcampaigns_campaign#id DataAwsccConnectcampaignsCampaign#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectcampaignsCampaignDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfig {

};
```


### DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig {

};
```


### DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig {

};
```


### DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig <a name="DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig {

};
```


### DataAwsccConnectcampaignsCampaignOutboundCallConfig <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignOutboundCallConfig {

};
```


### DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig {

};
```


### DataAwsccConnectcampaignsCampaignTags <a name="DataAwsccConnectcampaignsCampaignTags" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig">AgentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig">PredictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig">ProgressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentlessDialerConfig`<sup>Required</sup> <a name="AgentlessDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference AgentlessDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a>

---

##### `PredictiveDialerConfig`<sup>Required</sup> <a name="PredictiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference PredictiveDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a>

---

##### `ProgressiveDialerConfig`<sup>Required</sup> <a name="ProgressiveDialerConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference ProgressiveDialerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; }
```

- *Type:* double

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation">BandwidthAllocation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity">DialingCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthAllocation`<sup>Required</sup> <a name="BandwidthAllocation" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```csharp
public double BandwidthAllocation { get; }
```

- *Type:* double

---

##### `DialingCapacity`<sup>Required</sup> <a name="DialingCapacity" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity"></a>

```csharp
public double DialingCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">DataAwsccConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---


### DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt">AwaitAnswerMachinePrompt</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection">EnableAnswerMachineDetection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwaitAnswerMachinePrompt`<sup>Required</sup> <a name="AwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt"></a>

```csharp
public IResolvable AwaitAnswerMachinePrompt { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableAnswerMachineDetection`<sup>Required</sup> <a name="EnableAnswerMachineDetection" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection"></a>

```csharp
public IResolvable EnableAnswerMachineDetection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---


### DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference <a name="DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig">AnswerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn">ConnectContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn">ConnectQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber">ConnectSourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnswerMachineDetectionConfig`<sup>Required</sup> <a name="AnswerMachineDetectionConfig" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig"></a>

```csharp
public DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference AnswerMachineDetectionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">DataAwsccConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a>

---

##### `ConnectContactFlowArn`<sup>Required</sup> <a name="ConnectContactFlowArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn"></a>

```csharp
public string ConnectContactFlowArn { get; }
```

- *Type:* string

---

##### `ConnectQueueArn`<sup>Required</sup> <a name="ConnectQueueArn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn"></a>

```csharp
public string ConnectQueueArn { get; }
```

- *Type:* string

---

##### `ConnectSourcePhoneNumber`<sup>Required</sup> <a name="ConnectSourcePhoneNumber" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber"></a>

```csharp
public string ConnectSourcePhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignOutboundCallConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignOutboundCallConfig">DataAwsccConnectcampaignsCampaignOutboundCallConfig</a>

---


### DataAwsccConnectcampaignsCampaignTagsList <a name="DataAwsccConnectcampaignsCampaignTagsList" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get"></a>

```csharp
private DataAwsccConnectcampaignsCampaignTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccConnectcampaignsCampaignTagsOutputReference <a name="DataAwsccConnectcampaignsCampaignTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccConnectcampaignsCampaignTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags">DataAwsccConnectcampaignsCampaignTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccConnectcampaignsCampaignTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectcampaignsCampaign.DataAwsccConnectcampaignsCampaignTags">DataAwsccConnectcampaignsCampaignTags</a>

---



