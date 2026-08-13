# `dataAwsccSsoPermissionSet` Submodule <a name="`dataAwsccSsoPermissionSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsoPermissionSet <a name="DataAwsccSsoPermissionSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSet(Construct Scope, string Id, DataAwsccSsoPermissionSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig">DataAwsccSsoPermissionSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig">DataAwsccSsoPermissionSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoPermissionSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoPermissionSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoPermissionSet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSsoPermissionSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsoPermissionSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.customerManagedPolicyReferences">CustomerManagedPolicyReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList">DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.inlinePolicy">InlinePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.managedPolicies">ManagedPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionsBoundary">PermissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionSetArn">PermissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.relayStateType">RelayStateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList">DataAwsccSsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CustomerManagedPolicyReferences`<sup>Required</sup> <a name="CustomerManagedPolicyReferences" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.customerManagedPolicyReferences"></a>

```csharp
public DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList CustomerManagedPolicyReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList">DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.inlinePolicy"></a>

```csharp
public string InlinePolicy { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `ManagedPolicies`<sup>Required</sup> <a name="ManagedPolicies" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.managedPolicies"></a>

```csharp
public string[] ManagedPolicies { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PermissionsBoundary`<sup>Required</sup> <a name="PermissionsBoundary" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionsBoundary"></a>

```csharp
public DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference PermissionsBoundary { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.permissionSetArn"></a>

```csharp
public string PermissionSetArn { get; }
```

- *Type:* string

---

##### `RelayStateType`<sup>Required</sup> <a name="RelayStateType" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.relayStateType"></a>

```csharp
public string RelayStateType { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tags"></a>

```csharp
public DataAwsccSsoPermissionSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList">DataAwsccSsoPermissionSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsoPermissionSetConfig <a name="DataAwsccSsoPermissionSetConfig" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sso_permission_set#id DataAwsccSsoPermissionSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsoPermissionSetCustomerManagedPolicyReferences <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetCustomerManagedPolicyReferences {

};
```


### DataAwsccSsoPermissionSetPermissionsBoundary <a name="DataAwsccSsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetPermissionsBoundary {

};
```


### DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference {

};
```


### DataAwsccSsoPermissionSetTags <a name="DataAwsccSsoPermissionSetTags" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```csharp
private DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences">DataAwsccSsoPermissionSetCustomerManagedPolicyReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoPermissionSetCustomerManagedPolicyReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetCustomerManagedPolicyReferences">DataAwsccSsoPermissionSetCustomerManagedPolicyReferences</a>

---


### DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---


### DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference <a name="DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">ManagedPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary">DataAwsccSsoPermissionSetPermissionsBoundary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedPolicyReference`<sup>Required</sup> <a name="CustomerManagedPolicyReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```csharp
public DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference CustomerManagedPolicyReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">DataAwsccSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `ManagedPolicyArn`<sup>Required</sup> <a name="ManagedPolicyArn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```csharp
public string ManagedPolicyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoPermissionSetPermissionsBoundary InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetPermissionsBoundary">DataAwsccSsoPermissionSetPermissionsBoundary</a>

---


### DataAwsccSsoPermissionSetTagsList <a name="DataAwsccSsoPermissionSetTagsList" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get"></a>

```csharp
private DataAwsccSsoPermissionSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSsoPermissionSetTagsOutputReference <a name="DataAwsccSsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSsoPermissionSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags">DataAwsccSsoPermissionSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSsoPermissionSetTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsoPermissionSet.DataAwsccSsoPermissionSetTags">DataAwsccSsoPermissionSetTags</a>

---



