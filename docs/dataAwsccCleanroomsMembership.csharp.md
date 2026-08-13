# `dataAwsccCleanroomsMembership` Submodule <a name="`dataAwsccCleanroomsMembership` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsMembership <a name="DataAwsccCleanroomsMembership" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_membership awscc_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembership(Construct Scope, string Id, DataAwsccCleanroomsMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig">DataAwsccCleanroomsMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig">DataAwsccCleanroomsMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsMembership resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsMembership.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsMembership.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCleanroomsMembership resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsMembership to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationCreatorAccountId">CollaborationCreatorAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.defaultJobResultConfiguration">DefaultJobResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.defaultResultConfiguration">DefaultResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.isMetricsEnabled">IsMetricsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.jobLogStatus">JobLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.queryLogStatus">QueryLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList">DataAwsccCleanroomsMembershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationCreatorAccountId`<sup>Required</sup> <a name="CollaborationCreatorAccountId" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationCreatorAccountId"></a>

```csharp
public string CollaborationCreatorAccountId { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `DefaultJobResultConfiguration`<sup>Required</sup> <a name="DefaultJobResultConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.defaultJobResultConfiguration"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference DefaultJobResultConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference</a>

---

##### `DefaultResultConfiguration`<sup>Required</sup> <a name="DefaultResultConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.defaultResultConfiguration"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference DefaultResultConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference</a>

---

##### `IsMetricsEnabled`<sup>Required</sup> <a name="IsMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.isMetricsEnabled"></a>

```csharp
public IResolvable IsMetricsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `JobLogStatus`<sup>Required</sup> <a name="JobLogStatus" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.jobLogStatus"></a>

```csharp
public string JobLogStatus { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `PaymentConfiguration`<sup>Required</sup> <a name="PaymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.paymentConfiguration"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference PaymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference</a>

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.queryLogStatus"></a>

```csharp
public string QueryLogStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.tags"></a>

```csharp
public DataAwsccCleanroomsMembershipTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList">DataAwsccCleanroomsMembershipTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsMembershipConfig <a name="DataAwsccCleanroomsMembershipConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_membership#id DataAwsccCleanroomsMembership#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsMembershipDefaultJobResultConfiguration <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfiguration {

};
```


### DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration {

};
```


### DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 {

};
```


### DataAwsccCleanroomsMembershipDefaultResultConfiguration <a name="DataAwsccCleanroomsMembershipDefaultResultConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfiguration {

};
```


### DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration {

};
```


### DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {

};
```


### DataAwsccCleanroomsMembershipPaymentConfiguration <a name="DataAwsccCleanroomsMembershipPaymentConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfiguration {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute <a name="DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration {

};
```


### DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute <a name="DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute {

};
```


### DataAwsccCleanroomsMembershipTags <a name="DataAwsccCleanroomsMembershipTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---


### DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---


### DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference <a name="DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfiguration">DataAwsccCleanroomsMembershipDefaultJobResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputConfiguration`<sup>Required</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference OutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultJobResultConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultJobResultConfiguration">DataAwsccCleanroomsMembershipDefaultJobResultConfiguration</a>

---


### DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---


### DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">ResultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput">SingleFileOutput</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `ResultFormat`<sup>Required</sup> <a name="ResultFormat" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```csharp
public string ResultFormat { get; }
```

- *Type:* string

---

##### `SingleFileOutput`<sup>Required</sup> <a name="SingleFileOutput" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput"></a>

```csharp
public IResolvable SingleFileOutput { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---


### DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference <a name="DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">OutputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfiguration">DataAwsccCleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputConfiguration`<sup>Required</sup> <a name="OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference OutputConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipDefaultResultConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipDefaultResultConfiguration">DataAwsccCleanroomsMembershipDefaultResultConfiguration</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute">DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```csharp
public IResolvable IsResponsible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute">DataAwsccCleanroomsMembershipPaymentConfigurationJobCompute</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">IsResponsible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```csharp
public IResolvable IsResponsible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">IsResponsible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```csharp
public IResolvable IsResponsible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInference`<sup>Required</sup> <a name="ModelInference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference ModelInference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `ModelTraining`<sup>Required</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference ModelTraining { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `SyntheticDataGeneration`<sup>Required</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference SyntheticDataGeneration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearning</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">IsResponsible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```csharp
public IResolvable IsResponsible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfiguration">DataAwsccCleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobCompute`<sup>Required</sup> <a name="JobCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference JobCompute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a>

---

##### `MachineLearning`<sup>Required</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference MachineLearning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a>

---

##### `QueryCompute`<sup>Required</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference QueryCompute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfiguration">DataAwsccCleanroomsMembershipPaymentConfiguration</a>

---


### DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute">DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```csharp
public IResolvable IsResponsible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute">DataAwsccCleanroomsMembershipPaymentConfigurationQueryCompute</a>

---


### DataAwsccCleanroomsMembershipTagsList <a name="DataAwsccCleanroomsMembershipTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.get"></a>

```csharp
private DataAwsccCleanroomsMembershipTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsMembershipTagsOutputReference <a name="DataAwsccCleanroomsMembershipTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsMembershipTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTags">DataAwsccCleanroomsMembershipTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsMembershipTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsMembership.DataAwsccCleanroomsMembershipTags">DataAwsccCleanroomsMembershipTags</a>

---



