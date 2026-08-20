# `dataAwsccEc2VerifiedAccessEndpoint` Submodule <a name="`dataAwsccEc2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessEndpoint <a name="DataAwsccEc2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpoint(Construct Scope, string Id, DataAwsccEc2VerifiedAccessEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2VerifiedAccessEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled">PolicyEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">VerifiedAccessEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain"></a>

```csharp
public string ApplicationDomain { get; }
```

- *Type:* string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference CidrOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```csharp
public string DeviceValidationDomain { get; }
```

- *Type:* string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```csharp
public string DomainCertificateArn { get; }
```

- *Type:* string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain"></a>

```csharp
public string EndpointDomain { get; }
```

- *Type:* string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```csharp
public string EndpointDomainPrefix { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference LoadBalancerOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference NetworkInterfaceOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled"></a>

```csharp
public IResolvable PolicyEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference RdsOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a>

---

##### `VerifiedAccessEndpointId`<sup>Required</sup> <a name="VerifiedAccessEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```csharp
public string VerifiedAccessEndpointId { get; }
```

- *Type:* string

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; }
```

- *Type:* string

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptions <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointCidrOptions {

};
```


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges {

};
```


### DataAwsccEc2VerifiedAccessEndpointConfig <a name="DataAwsccEc2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions {

};
```


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {

};
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions {

};
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {

};
```


### DataAwsccEc2VerifiedAccessEndpointRdsOptions <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointRdsOptions {

};
```


### DataAwsccEc2VerifiedAccessEndpointSseSpecification <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointSseSpecification {

};
```


### DataAwsccEc2VerifiedAccessEndpointTags <a name="DataAwsccEc2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointCidrOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```csharp
private DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```csharp
private DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList PortRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```csharp
private DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```csharp
public string RdsDbClusterArn { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; }
```

- *Type:* string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```csharp
public string RdsDbProxyArn { get; }
```

- *Type:* string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```csharp
public string RdsEndpoint { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointRdsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```csharp
public IResolvable CustomerManagedKeyEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointSseSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessEndpointTagsList <a name="DataAwsccEc2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get"></a>

```csharp
private DataAwsccEc2VerifiedAccessEndpointTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2VerifiedAccessEndpointTagsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2VerifiedAccessEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2VerifiedAccessEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a>

---



