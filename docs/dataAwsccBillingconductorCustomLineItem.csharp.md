# `dataAwsccBillingconductorCustomLineItem` Submodule <a name="`dataAwsccBillingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBillingconductorCustomLineItem <a name="DataAwsccBillingconductorCustomLineItem" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItem(Construct Scope, string Id, DataAwsccBillingconductorCustomLineItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig">DataAwsccBillingconductorCustomLineItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig">DataAwsccBillingconductorCustomLineItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorCustomLineItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorCustomLineItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorCustomLineItem.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBillingconductorCustomLineItem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBillingconductorCustomLineItem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.associationSize">AssociationSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingGroupArn">BillingGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingPeriodRange">BillingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference">DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.computationRule">ComputationRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.customLineItemChargeDetails">CustomLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.presentationDetails">PresentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference">DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.productCode">ProductCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList">DataAwsccBillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationSize`<sup>Required</sup> <a name="AssociationSize" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.associationSize"></a>

```csharp
public double AssociationSize { get; }
```

- *Type:* double

---

##### `BillingGroupArn`<sup>Required</sup> <a name="BillingGroupArn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingGroupArn"></a>

```csharp
public string BillingGroupArn { get; }
```

- *Type:* string

---

##### `BillingPeriodRange`<sup>Required</sup> <a name="BillingPeriodRange" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingPeriodRange"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference BillingPeriodRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference">DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `ComputationRule`<sup>Required</sup> <a name="ComputationRule" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.computationRule"></a>

```csharp
public string ComputationRule { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `CustomLineItemChargeDetails`<sup>Required</sup> <a name="CustomLineItemChargeDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference CustomLineItemChargeDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PresentationDetails`<sup>Required</sup> <a name="PresentationDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.presentationDetails"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference PresentationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference">DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `ProductCode`<sup>Required</sup> <a name="ProductCode" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.productCode"></a>

```csharp
public string ProductCode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tags"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList">DataAwsccBillingconductorCustomLineItemTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBillingconductorCustomLineItemBillingPeriodRange <a name="DataAwsccBillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemBillingPeriodRange {

};
```


### DataAwsccBillingconductorCustomLineItemConfig <a name="DataAwsccBillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/billingconductor_custom_line_item#id DataAwsccBillingconductorCustomLineItem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails {

};
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat {

};
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters {

};
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage {

};
```


### DataAwsccBillingconductorCustomLineItemPresentationDetails <a name="DataAwsccBillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemPresentationDetails {

};
```


### DataAwsccBillingconductorCustomLineItemTags <a name="DataAwsccBillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">ExclusiveEndBillingPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">InclusiveStartBillingPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange">DataAwsccBillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusiveEndBillingPeriod`<sup>Required</sup> <a name="ExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```csharp
public string ExclusiveEndBillingPeriod { get; }
```

- *Type:* string

---

##### `InclusiveStartBillingPeriod`<sup>Required</sup> <a name="InclusiveStartBillingPeriod" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```csharp
public string InclusiveStartBillingPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemBillingPeriodRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange">DataAwsccBillingconductorCustomLineItemBillingPeriodRange</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">ChargeValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChargeValue`<sup>Required</sup> <a name="ChargeValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```csharp
public double ChargeValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```csharp
private DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">AttributeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">MatchOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```csharp
public string[] AttributeValues { get; }
```

- *Type:* string[]

---

##### `MatchOption`<sup>Required</sup> <a name="MatchOption" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```csharp
public string MatchOption { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">LineItemFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">Percentage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference Flat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `LineItemFilters`<sup>Required</sup> <a name="LineItemFilters" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList LineItemFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference Percentage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">ChildAssociatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">PercentageValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildAssociatedResources`<sup>Required</sup> <a name="ChildAssociatedResources" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```csharp
public string[] ChildAssociatedResources { get; }
```

- *Type:* string[]

---

##### `PercentageValue`<sup>Required</sup> <a name="PercentageValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```csharp
public double PercentageValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---


### DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference <a name="DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails">DataAwsccBillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemPresentationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails">DataAwsccBillingconductorCustomLineItemPresentationDetails</a>

---


### DataAwsccBillingconductorCustomLineItemTagsList <a name="DataAwsccBillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get"></a>

```csharp
private DataAwsccBillingconductorCustomLineItemTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBillingconductorCustomLineItemTagsOutputReference <a name="DataAwsccBillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBillingconductorCustomLineItemTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags">DataAwsccBillingconductorCustomLineItemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBillingconductorCustomLineItemTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags">DataAwsccBillingconductorCustomLineItemTags</a>

---



