# `dataAwsccServicediscoveryPublicDnsNamespace` Submodule <a name="`dataAwsccServicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicediscoveryPublicDnsNamespace <a name="DataAwsccServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespace(Construct Scope, string Id, DataAwsccServicediscoveryPublicDnsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicediscoveryPublicDnsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicediscoveryPublicDnsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicediscoveryPublicDnsNamespace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccServicediscoveryPublicDnsNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicediscoveryPublicDnsNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">PublicDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `PublicDnsNamespaceId`<sup>Required</sup> <a name="PublicDnsNamespaceId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```csharp
public string PublicDnsNamespaceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicediscoveryPublicDnsNamespaceConfig <a name="DataAwsccServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/servicediscovery_public_dns_namespace#id DataAwsccServicediscoveryPublicDnsNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicediscoveryPublicDnsNamespaceProperties <a name="DataAwsccServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespaceProperties {

};
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties {

};
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa {

};
```


### DataAwsccServicediscoveryPublicDnsNamespaceTags <a name="DataAwsccServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespaceTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference Soa { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">DnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsProperties`<sup>Required</sup> <a name="DnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference DnsProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespaceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsList <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```csharp
private DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccServicediscoveryPublicDnsNamespaceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a>

---



