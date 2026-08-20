# `dataAwsccB2BiPartnership` Submodule <a name="`dataAwsccB2BiPartnership` Submodule" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccB2BiPartnership <a name="DataAwsccB2BiPartnership" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_partnership awscc_b2bi_partnership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnership(Construct Scope, string Id, DataAwsccB2BiPartnershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig">DataAwsccB2BiPartnershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig">DataAwsccB2BiPartnershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccB2BiPartnership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccB2BiPartnership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccB2BiPartnership.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccB2BiPartnership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccB2BiPartnership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccB2BiPartnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_partnership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccB2BiPartnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions">CapabilityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn">PartnershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId">PartnershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId">TradingPartnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `CapabilityOptions`<sup>Required</sup> <a name="CapabilityOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.capabilityOptions"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutputReference CapabilityOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnershipArn`<sup>Required</sup> <a name="PartnershipArn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipArn"></a>

```csharp
public string PartnershipArn { get; }
```

- *Type:* string

---

##### `PartnershipId`<sup>Required</sup> <a name="PartnershipId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.partnershipId"></a>

```csharp
public string PartnershipId { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tags"></a>

```csharp
public DataAwsccB2BiPartnershipTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList">DataAwsccB2BiPartnershipTagsList</a>

---

##### `TradingPartnerId`<sup>Required</sup> <a name="TradingPartnerId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tradingPartnerId"></a>

```csharp
public string TradingPartnerId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccB2BiPartnershipCapabilityOptions <a name="DataAwsccB2BiPartnershipCapabilityOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptions {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders {

};
```


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions {

};
```


### DataAwsccB2BiPartnershipConfig <a name="DataAwsccB2BiPartnershipConfig" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/b2bi_partnership#id DataAwsccB2BiPartnership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccB2BiPartnershipTags <a name="DataAwsccB2BiPartnershipTags" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment">FunctionalAcknowledgment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment">TechnicalAcknowledgment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionalAcknowledgment`<sup>Required</sup> <a name="FunctionalAcknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment"></a>

```csharp
public string FunctionalAcknowledgment { get; }
```

- *Type:* string

---

##### `TechnicalAcknowledgment`<sup>Required</sup> <a name="TechnicalAcknowledgment" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment"></a>

```csharp
public string TechnicalAcknowledgment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions">AcknowledgmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgmentOptions`<sup>Required</sup> <a name="AcknowledgmentOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference AcknowledgmentOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber">StartingFunctionalGroupControlNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber">StartingInterchangeControlNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber">StartingTransactionSetControlNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartingFunctionalGroupControlNumber`<sup>Required</sup> <a name="StartingFunctionalGroupControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber"></a>

```csharp
public double StartingFunctionalGroupControlNumber { get; }
```

- *Type:* double

---

##### `StartingInterchangeControlNumber`<sup>Required</sup> <a name="StartingInterchangeControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber"></a>

```csharp
public double StartingInterchangeControlNumber { get; }
```

- *Type:* double

---

##### `StartingTransactionSetControlNumber`<sup>Required</sup> <a name="StartingTransactionSetControlNumber" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber"></a>

```csharp
public double StartingTransactionSetControlNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator">ComponentSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator">DataElementSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator">SegmentTerminator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentSeparator`<sup>Required</sup> <a name="ComponentSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator"></a>

```csharp
public string ComponentSeparator { get; }
```

- *Type:* string

---

##### `DataElementSeparator`<sup>Required</sup> <a name="DataElementSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator"></a>

```csharp
public string DataElementSeparator { get; }
```

- *Type:* string

---

##### `SegmentTerminator`<sup>Required</sup> <a name="SegmentTerminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator"></a>

```csharp
public string SegmentTerminator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode">ApplicationReceiverCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode">ApplicationSenderCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode">ResponsibleAgencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationReceiverCode`<sup>Required</sup> <a name="ApplicationReceiverCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode"></a>

```csharp
public string ApplicationReceiverCode { get; }
```

- *Type:* string

---

##### `ApplicationSenderCode`<sup>Required</sup> <a name="ApplicationSenderCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode"></a>

```csharp
public string ApplicationSenderCode { get; }
```

- *Type:* string

---

##### `ResponsibleAgencyCode`<sup>Required</sup> <a name="ResponsibleAgencyCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode"></a>

```csharp
public string ResponsibleAgencyCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode">AcknowledgmentRequestedCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId">ReceiverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier">ReceiverIdQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator">RepetitionSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId">SenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier">SenderIdQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode">UsageIndicatorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcknowledgmentRequestedCode`<sup>Required</sup> <a name="AcknowledgmentRequestedCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode"></a>

```csharp
public string AcknowledgmentRequestedCode { get; }
```

- *Type:* string

---

##### `ReceiverId`<sup>Required</sup> <a name="ReceiverId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId"></a>

```csharp
public string ReceiverId { get; }
```

- *Type:* string

---

##### `ReceiverIdQualifier`<sup>Required</sup> <a name="ReceiverIdQualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier"></a>

```csharp
public string ReceiverIdQualifier { get; }
```

- *Type:* string

---

##### `RepetitionSeparator`<sup>Required</sup> <a name="RepetitionSeparator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator"></a>

```csharp
public string RepetitionSeparator { get; }
```

- *Type:* string

---

##### `SenderId`<sup>Required</sup> <a name="SenderId" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId"></a>

```csharp
public string SenderId { get; }
```

- *Type:* string

---

##### `SenderIdQualifier`<sup>Required</sup> <a name="SenderIdQualifier" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier"></a>

```csharp
public string SenderIdQualifier { get; }
```

- *Type:* string

---

##### `UsageIndicatorCode`<sup>Required</sup> <a name="UsageIndicatorCode" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode"></a>

```csharp
public string UsageIndicatorCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers">ControlNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters">Delimiters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders">FunctionalGroupHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat">Gs05TimeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders">InterchangeControlHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi">ValidateEdi</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ControlNumbers`<sup>Required</sup> <a name="ControlNumbers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference ControlNumbers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a>

---

##### `Delimiters`<sup>Required</sup> <a name="Delimiters" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference Delimiters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a>

---

##### `FunctionalGroupHeaders`<sup>Required</sup> <a name="FunctionalGroupHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference FunctionalGroupHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a>

---

##### `Gs05TimeFormat`<sup>Required</sup> <a name="Gs05TimeFormat" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat"></a>

```csharp
public string Gs05TimeFormat { get; }
```

- *Type:* string

---

##### `InterchangeControlHeaders`<sup>Required</sup> <a name="InterchangeControlHeaders" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference InterchangeControlHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a>

---

##### `ValidateEdi`<sup>Required</sup> <a name="ValidateEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi"></a>

```csharp
public IResolvable ValidateEdi { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common">Common</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions">WrapOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference Common { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a>

---

##### `WrapOptions`<sup>Required</sup> <a name="WrapOptions" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference WrapOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength">LineLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator">LineTerminator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy">WrapBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LineLength`<sup>Required</sup> <a name="LineLength" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength"></a>

```csharp
public double LineLength { get; }
```

- *Type:* double

---

##### `LineTerminator`<sup>Required</sup> <a name="LineTerminator" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator"></a>

```csharp
public string LineTerminator { get; }
```

- *Type:* string

---

##### `WrapBy`<sup>Required</sup> <a name="WrapBy" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy"></a>

```csharp
public string WrapBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---


### DataAwsccB2BiPartnershipCapabilityOptionsOutputReference <a name="DataAwsccB2BiPartnershipCapabilityOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipCapabilityOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi">InboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi">OutboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InboundEdi`<sup>Required</sup> <a name="InboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference InboundEdi { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a>

---

##### `OutboundEdi`<sup>Required</sup> <a name="OutboundEdi" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference OutboundEdi { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipCapabilityOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipCapabilityOptions">DataAwsccB2BiPartnershipCapabilityOptions</a>

---


### DataAwsccB2BiPartnershipTagsList <a name="DataAwsccB2BiPartnershipTagsList" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get"></a>

```csharp
private DataAwsccB2BiPartnershipTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccB2BiPartnershipTagsOutputReference <a name="DataAwsccB2BiPartnershipTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccB2BiPartnershipTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccB2BiPartnershipTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccB2BiPartnership.DataAwsccB2BiPartnershipTags">DataAwsccB2BiPartnershipTags</a>

---



