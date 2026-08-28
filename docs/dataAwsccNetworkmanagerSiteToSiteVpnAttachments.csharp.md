# `dataAwsccNetworkmanagerSiteToSiteVpnAttachments` Submodule <a name="`dataAwsccNetworkmanagerSiteToSiteVpnAttachments` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachments <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_site_to_site_vpn_attachments awscc_networkmanager_site_to_site_vpn_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachments(Construct Scope, string Id, DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccNetworkmanagerSiteToSiteVpnAttachments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkmanagerSiteToSiteVpnAttachments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkmanagerSiteToSiteVpnAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_site_to_site_vpn_attachments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerSiteToSiteVpnAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachments.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



