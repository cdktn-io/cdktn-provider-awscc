# `dataAwsccInvoicingProcurementPortalPreference` Submodule <a name="`dataAwsccInvoicingProcurementPortalPreference` Submodule" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInvoicingProcurementPortalPreference <a name="DataAwsccInvoicingProcurementPortalPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference awscc_invoicing_procurement_portal_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreference(Construct Scope, string Id, DataAwsccInvoicingProcurementPortalPreferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig">DataAwsccInvoicingProcurementPortalPreferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig">DataAwsccInvoicingProcurementPortalPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInvoicingProcurementPortalPreference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInvoicingProcurementPortalPreference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInvoicingProcurementPortalPreference.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInvoicingProcurementPortalPreference.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInvoicingProcurementPortalPreference resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInvoicingProcurementPortalPreference to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInvoicingProcurementPortalPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInvoicingProcurementPortalPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts">Contacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate">CreateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled">EinvoiceDeliveryEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference">EinvoiceDeliveryPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus">EinvoiceDeliveryPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate">LastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName">ProcurementPortalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn">ProcurementPortalPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled">PurchaseOrderRetrievalEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint">PurchaseOrderRetrievalEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus">PurchaseOrderRetrievalPreferenceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector">Selector</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference">TestEnvPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `BuyerDomain`<sup>Required</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; }
```

- *Type:* string

---

##### `BuyerIdentifier`<sup>Required</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; }
```

- *Type:* string

---

##### `Contacts`<sup>Required</sup> <a name="Contacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.contacts"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceContactsList Contacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList">DataAwsccInvoicingProcurementPortalPreferenceContactsList</a>

---

##### `CreateDate`<sup>Required</sup> <a name="CreateDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.createDate"></a>

```csharp
public string CreateDate { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryEnabled`<sup>Required</sup> <a name="EinvoiceDeliveryEnabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryEnabled"></a>

```csharp
public IResolvable EinvoiceDeliveryEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EinvoiceDeliveryPreference`<sup>Required</sup> <a name="EinvoiceDeliveryPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreference"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference EinvoiceDeliveryPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference</a>

---

##### `EinvoiceDeliveryPreferenceStatus`<sup>Required</sup> <a name="EinvoiceDeliveryPreferenceStatus" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.einvoiceDeliveryPreferenceStatus"></a>

```csharp
public string EinvoiceDeliveryPreferenceStatus { get; }
```

- *Type:* string

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.lastUpdateDate"></a>

```csharp
public string LastUpdateDate { get; }
```

- *Type:* string

---

##### `ProcurementPortalInstanceEndpoint`<sup>Required</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; }
```

- *Type:* string

---

##### `ProcurementPortalName`<sup>Required</sup> <a name="ProcurementPortalName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalName"></a>

```csharp
public string ProcurementPortalName { get; }
```

- *Type:* string

---

##### `ProcurementPortalPreferenceArn`<sup>Required</sup> <a name="ProcurementPortalPreferenceArn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalPreferenceArn"></a>

```csharp
public string ProcurementPortalPreferenceArn { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecret`<sup>Required</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalEnabled`<sup>Required</sup> <a name="PurchaseOrderRetrievalEnabled" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEnabled"></a>

```csharp
public IResolvable PurchaseOrderRetrievalEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PurchaseOrderRetrievalEndpoint`<sup>Required</sup> <a name="PurchaseOrderRetrievalEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalEndpoint"></a>

```csharp
public string PurchaseOrderRetrievalEndpoint { get; }
```

- *Type:* string

---

##### `PurchaseOrderRetrievalPreferenceStatus`<sup>Required</sup> <a name="PurchaseOrderRetrievalPreferenceStatus" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.purchaseOrderRetrievalPreferenceStatus"></a>

```csharp
public string PurchaseOrderRetrievalPreferenceStatus { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.selector"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference Selector { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference">DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference</a>

---

##### `SupplierDomain`<sup>Required</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; }
```

- *Type:* string

---

##### `SupplierIdentifier`<sup>Required</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tags"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList">DataAwsccInvoicingProcurementPortalPreferenceTagsList</a>

---

##### `TestEnvPreference`<sup>Required</sup> <a name="TestEnvPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.testEnvPreference"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference TestEnvPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInvoicingProcurementPortalPreferenceConfig <a name="DataAwsccInvoicingProcurementPortalPreferenceConfig" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/invoicing_procurement_portal_preference#id DataAwsccInvoicingProcurementPortalPreference#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInvoicingProcurementPortalPreferenceContacts <a name="DataAwsccInvoicingProcurementPortalPreferenceContacts" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceContacts {

};
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference {

};
```


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources {

};
```


### DataAwsccInvoicingProcurementPortalPreferenceSelector <a name="DataAwsccInvoicingProcurementPortalPreferenceSelector" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceSelector {

};
```


### DataAwsccInvoicingProcurementPortalPreferenceTags <a name="DataAwsccInvoicingProcurementPortalPreferenceTags" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceTags {

};
```


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInvoicingProcurementPortalPreferenceContactsList <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get"></a>

```csharp
private DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceContacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceContacts">DataAwsccInvoicingProcurementPortalPreferenceContacts</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod">ConnectionTestingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate">EinvoiceDeliveryActivationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes">EinvoiceDeliveryAttachmentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes">EinvoiceDeliveryDocumentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources">PurchaseOrderDataSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionTestingMethod`<sup>Required</sup> <a name="ConnectionTestingMethod" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.connectionTestingMethod"></a>

```csharp
public string ConnectionTestingMethod { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryActivationDate`<sup>Required</sup> <a name="EinvoiceDeliveryActivationDate" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryActivationDate"></a>

```csharp
public string EinvoiceDeliveryActivationDate { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryAttachmentTypes`<sup>Required</sup> <a name="EinvoiceDeliveryAttachmentTypes" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryAttachmentTypes"></a>

```csharp
public string[] EinvoiceDeliveryAttachmentTypes { get; }
```

- *Type:* string[]

---

##### `EinvoiceDeliveryDocumentTypes`<sup>Required</sup> <a name="EinvoiceDeliveryDocumentTypes" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.einvoiceDeliveryDocumentTypes"></a>

```csharp
public string[] EinvoiceDeliveryDocumentTypes { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSources`<sup>Required</sup> <a name="PurchaseOrderDataSources" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.purchaseOrderDataSources"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList PurchaseOrderDataSources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreference</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get"></a>

```csharp
private DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType">EinvoiceDeliveryDocumentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType">PurchaseOrderDataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EinvoiceDeliveryDocumentType`<sup>Required</sup> <a name="EinvoiceDeliveryDocumentType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.einvoiceDeliveryDocumentType"></a>

```csharp
public string EinvoiceDeliveryDocumentType { get; }
```

- *Type:* string

---

##### `PurchaseOrderDataSourceType`<sup>Required</sup> <a name="PurchaseOrderDataSourceType" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.purchaseOrderDataSourceType"></a>

```csharp
public string PurchaseOrderDataSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources">DataAwsccInvoicingProcurementPortalPreferenceEinvoiceDeliveryPreferencePurchaseOrderDataSources</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns">InvoiceUnitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvoiceUnitArns`<sup>Required</sup> <a name="InvoiceUnitArns" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.invoiceUnitArns"></a>

```csharp
public string[] InvoiceUnitArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelectorOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceSelector">DataAwsccInvoicingProcurementPortalPreferenceSelector</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsList <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsList" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get"></a>

```csharp
private DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTags">DataAwsccInvoicingProcurementPortalPreferenceTags</a>

---


### DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference <a name="DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain">BuyerDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier">BuyerIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint">ProcurementPortalInstanceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret">ProcurementPortalSharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain">SupplierDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier">SupplierIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BuyerDomain`<sup>Required</sup> <a name="BuyerDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerDomain"></a>

```csharp
public string BuyerDomain { get; }
```

- *Type:* string

---

##### `BuyerIdentifier`<sup>Required</sup> <a name="BuyerIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.buyerIdentifier"></a>

```csharp
public string BuyerIdentifier { get; }
```

- *Type:* string

---

##### `ProcurementPortalInstanceEndpoint`<sup>Required</sup> <a name="ProcurementPortalInstanceEndpoint" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalInstanceEndpoint"></a>

```csharp
public string ProcurementPortalInstanceEndpoint { get; }
```

- *Type:* string

---

##### `ProcurementPortalSharedSecret`<sup>Required</sup> <a name="ProcurementPortalSharedSecret" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.procurementPortalSharedSecret"></a>

```csharp
public string ProcurementPortalSharedSecret { get; }
```

- *Type:* string

---

##### `SupplierDomain`<sup>Required</sup> <a name="SupplierDomain" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierDomain"></a>

```csharp
public string SupplierDomain { get; }
```

- *Type:* string

---

##### `SupplierIdentifier`<sup>Required</sup> <a name="SupplierIdentifier" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.supplierIdentifier"></a>

```csharp
public string SupplierIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInvoicingProcurementPortalPreference.DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference">DataAwsccInvoicingProcurementPortalPreferenceTestEnvPreference</a>

---



