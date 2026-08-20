# `dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule <a name="`dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachment <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachment(Construct Scope, string Id, DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors">LastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">VpnConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors"></a>

```csharp
public string[] LastModificationErrors { get; }
```

- *Type:* string[]

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName"></a>

```csharp
public string NetworkFunctionGroupName { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ProposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference ProposedNetworkFunctionGroupChange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `ProposedSegmentChange`<sup>Required</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference ProposedSegmentChange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VpnConnectionArn`<sup>Required</sup> <a name="VpnConnectionArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```csharp
public string VpnConnectionArn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#id DataAwsccNetworkmanagerSiteToSiteVpnAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange {

};
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags {

};
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange {

};
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags {

};
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```csharp
public string NetworkFunctionGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```csharp
private DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get"></a>

```csharp
private DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get"></a>

```csharp
private DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a>

---



